using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Hymalia.Areas.AdminCP.Attributes;
using Hymalia.Areas.AdminCP.Extensions;
using Hymalia.Areas.AdminCP.Models;
using Hymalia.Areas.AdminCP.Models.Authentication;
using Hymalia.Common.Enums;
using Hymalia.Common.Enums.UserLog;
using Hymalia.Common.Repositories;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using Navi.Library;
using Navi.Library.Exceptions;
using Navi.Library.Extensions;
using Navi.MongoDb;

namespace Hymalia.Areas.AdminCP.Controllers
{
    public class AuthenticationController : BaseController
    {

        private readonly ILogger<AuthenticationController> _logger;
        public AuthenticationController(IStringLocalizerFactory factory, IMongoDbContext context,ILogger<AuthenticationController> logger) : base(factory, context)
        {
            _logger = logger;
        }
        
        [HttpGet]
        public IActionResult SignIn(string returnUrl)
        {
            try
            {
                if (string.IsNullOrEmpty(returnUrl))
                    returnUrl = Url.Action("Index", "Home");

                if (CurrentUser != null)
                    return Redirect(returnUrl);

                var model = new SignInRequestModel
                {
                    returnUrl = returnUrl,
                    isRemember = true
                };
                
                var accessToken = Request.Cookies[AccessTokenModel.CookieName];
                if (!string.IsNullOrEmpty(accessToken))
                {
                    var token = AccessTokenModel.GetInstance(accessToken);
                    if (token != null)
                    {
                        if (string.IsNullOrEmpty(model.password))
                            model.username = token.Username;
                        else
                        {
                            var result = DoLogin(token.Username, token.Password);
                            if (string.IsNullOrEmpty(result))
                                return Redirect(returnUrl);
                        }
                    }
                }
                
                return View(new SignInRequestModel
                {
                    username = model.username ?? string.Empty,
                    isRemember = true,
                    returnUrl = returnUrl
                });
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }
            
            throw new HttpException(HttpStatusCode.InternalServerError);
        }
        
        public IActionResult SignOut()
        {
            if (CurrentUser == null) return RedirectToAction("SignIn", "Authentication");
            HttpContext.Session.Remove(CurrentUser.SessionName);
            Response.SetCookie(AccessTokenModel.CookieName, string.Empty, DateTime.Now.AddDays(-1d));

            return RedirectToAction("SignIn", "Authentication");
        }

        [HttpPost]
        [ValidateModel]
        public IActionResult SignIn( SignInRequestModel model)
        {
            try
            {
                var result = DoLogin(model.username, model.password);
                if (!string.IsNullOrEmpty(result))
                    return this.GetJsonResult(result);

                if (model.isRemember)
                    Response.SetCookie(AccessTokenModel.CookieName, new AccessTokenModel
                    {
                        Username = model.username,
                        Password = model.password,
                    }.ToString());

                return this.GetJsonResult(Languages["Signed in successfully"], false,  model.returnUrl,0);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }
        
        [HttpGet]
        [LoginRequired]
        public ActionResult ChangePassword()
        {
            try
            {
                var user = new UserRepository(DbContext).FindOne(x => x._id == CurrentUser.IdUser);
                if (user == null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("User");

                return View(new ChangePasswordRequestModel
                {
                    id = user._id,
                });
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }
            return this.GetJsonResult();
        }

        [HttpPost, LoginRequired]
        [ValidateModel]
        public  IActionResult ChangePassword(ChangePasswordRequestModel model)
        {
            try
            {
                var repository = new UserRepository(DbContext);
                var user =repository.FindOne(x => x._id == model.id);
                if (user == null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("User");

                if (!model.oldPassword.VerifyBcrypt(user.Password))
                    return this.GetJsonResult("Mật khẩu cũ không chính xác.");
                
                user.Password = model.newPassword.Trim().HashByBcrypt();
                user.ModifiedDate = DateTime.Now;
                user.IDModified = CurrentUser.IdUser;
                repository.ReplaceOne(x => x._id == user._id, user);
                
                InsertUserLog(Functions.User, Actions.Edit, "Change information");
                return this.GetJsonResult(ResponseMessages.ChangeInforSuccess, false);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }
    }
}