using Hymalia.Areas.AdminCP.Attributes;
using Hymalia.Areas.AdminCP.Extensions;
using Hymalia.Areas.AdminCP.Models;
using Hymalia.Areas.AdminCP.Models.User;
using Hymalia.Common.Enums;
using Hymalia.Common.Repositories;
using Hymalia.Database.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Localization;
using MongoDB.Bson;
using MongoDB.Driver;
using Navi.Library;
using Navi.Library.Extensions;
using Navi.MongoDb;

namespace Hymalia.Areas.AdminCP.Controllers
{
    public class UserController : BaseController
    {
        private UserRepository _repository;
        
        private readonly ILogger<UserController> _logger;
        public UserController(IStringLocalizerFactory factory, IMongoDbContext context,ILogger<UserController> logger) : base(factory, context)
        {
            _logger = logger;
        }
        
         public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            _repository = new UserRepository(DbContext);
        }

        [HttpGet, LoginRequired]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost, LoginRequired]
        public ActionResult Search(IndexRequestModel model)
        {
            try
            {
                var filters = Builders<UserCollection>.Filter.Eq(x => x.IsDeleted, false);
                if (!string.IsNullOrEmpty(model.fullName))
                {
                    filters &= Builders<UserCollection>.Filter.Regex(x => x.FullName,
                        new BsonRegularExpression(model.fullName, "i"));
                }
                
                if (!string.IsNullOrEmpty(model.userName))
                {
                    filters &= Builders<UserCollection>.Filter.Regex(x => x.Username,
                        new BsonRegularExpression(model.userName, "i"));
                }

                var response = model.GetResponseModel(_repository.Count(filters));

                var list = _repository
                    .Find(filters)
                    .Sort(model.GetSortBy(this))
                    .Skip(model.start)
                    .Limit(model.length)
                    .ToList();
             
                var data = new List<List<string>>();

                foreach (var item in list)
                {
                    var functions = "<div class=\"text-center\"><div class=\"btn-group\">";
                    functions +=
                            $"<button type=\"button\" class=\"btn btn-warning btn-xs\" onclick=\"editUser('{item._id.ToString()}')\"><i class=\"fas fa fa-pencil-alt\"></i> {Languages["Edit"]}</button>";
                    functions +=
                            $"<button type=\"button\" class=\"btn btn-danger btn-xs\" onclick=\"window.User.execDelete('{item._id.ToString()}')\"><i class=\"fas fa fa-trash\"></i> {Languages["Delete"]}</button>";
                    functions += "</div></div>";
                    
                    var css = item.IsBlocked ? "dark" : "success";
                    var statusName = item.IsBlocked ? "Bị khóa" : "Hoạt động";
                    var row = new List<string>
                    {
                        model.GetDisplayOrderText(),
                        $"<div class=\"text-center\"><div class=\"icheck-primary d-inline\"><input type=\"checkbox\" class=\"selector\" id=\"selector_{item._id}\" value=\"{item._id}\"/><label for=\"selector_{item._id}\"></label></div></div>",
                        functions,
                        item.Username,
                        item.FullName,
                        $"<span class=\"badge badge-{css}\">{statusName}</span>"
                    };
                    data.Add(row);
                }

                response.data = data;
                return Json(response);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return  model.GetResponse(this);
        }
        
        
        [HttpGet,LoginRequired]
        public ActionResult Add()
        {
            try
            {
                return View();
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }
        
        [HttpPost,LoginRequired]
        [ValidateModel]
        public ActionResult Add(AddRequestModel model)
        {
            try
            {
                if(_repository.FindOne(x => x.Username.Equals(model.userName.ToLower().Trim()) && !x.IsDeleted) != null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("User");

                var now = DateTime.Now;
                _repository.Insert(new UserCollection
                {
                    _id = new AutoIncrementIdRepository(DbContext).GetNextSequenceValue(CollectionNames.Users),
                    Username = model.userName,
                    FullName = model.fullName,
                    Password = model.password.HashByBcrypt(),
                    IsBlocked = model.isBlocked,
                    CreatedDate = now,
                    IsDeleted = false,
                    ModifiedDate = now,
                    IDCreator = CurrentUser.IdUser,
                    IDModified = CurrentUser.IdUser
                });
                InsertUserLog("Add new user {0}",model.userName);
                return this.GetJsonResult(ResponseMessages.AddSuccess, false);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }

        [HttpGet, LoginRequired]
        [ValidateModel]
        public ActionResult Edit(IdLongRequestModel model)
        {
            try
            {
                var user = _repository.FindOne(x => x._id == model.id && !x.IsDeleted);
                if (user == null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("User");
                return View(new EditRequestModel
                {
                    id = user._id,
                    fullName = user.FullName,
                    userName = user.Username,
                    isBlocked = user.IsBlocked
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
        public ActionResult Edit(EditRequestModel model)
        {
            try
            {
                var user = _repository.FindOne(x => x._id == model.id && !x.IsDeleted);
                if (user == null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("User");
               
                if(_repository.FindOne(x => x.Username.Equals(model.userName)&& x._id !=user._id && !x.IsDeleted) != null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("User");
               
                var now = DateTime.Now;
                if (!string.IsNullOrEmpty(model.password))
                    user.Password = model.password.HashByBcrypt();
                user.FullName = model.fullName;
                user.Username = model.userName;;
                user.IsBlocked = model.isBlocked;
                user.IsDeleted = false;
                user.ModifiedDate = now;    
                user.IDModified = CurrentUser.IdUser;
                _repository.ReplaceOne(x => x._id == user._id, user);
                InsertUserLog("Edit user {0}",model.userName);
                return this.GetJsonResult(ResponseMessages.EditSuccess, false);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }

        [HttpPost, LoginRequired]
        [ValidateModel]
        public ActionResult Delete(List<long> ids)
        {
            try
            {
                var user = _repository.FindByIds(ids);
                if (!user.Any())
                    return this.GetJsonResult("Please select one or more items to delete");
                _repository.UpdateMany(
                    Builders<UserCollection>.Filter.In(x => x._id, user.Select(x => x._id).ToList())
                    & Builders<UserCollection>.Filter.Eq(x => x.IsDeleted, false)
                    , Builders<UserCollection>.Update
                        .Set(x => x.IsDeleted, true)
                        .Set(x => x.IDModified, CurrentUser.IdUser)
                        .Set(x => x.ModifiedDate, DateTime.Now));
                var name = user.Select(x => x.Username).Aggregate((a, b) => a + ", " + b);
                InsertUserLog("Delete user {0}",name);
                return this.GetJsonResult(ResponseMessages.DeleteSuccess, false);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }
    }
}