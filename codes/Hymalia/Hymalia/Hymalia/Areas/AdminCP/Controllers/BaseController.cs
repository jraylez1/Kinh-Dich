using System.Reflection;
using Hymalia.Areas.AdminCP.Models;
using Hymalia.Common.Repositories;
using Hymalia.Database.Collections;
using Hymalia.Resources;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Localization;
using Navi.Library;
using Navi.Library.Extensions;
using Navi.Library.Localization;
using Navi.MongoDb;
namespace Hymalia.Areas.AdminCP.Controllers;

[Area("AdminCP")]
public class BaseController : Controller
{
        public readonly DbContext DbContext;
        public readonly IStringLocalizer Languages;

        public CurrentUser CurrentUser { get; set; }
        public string LanguageCode;

        public BaseController(IStringLocalizerFactory factory, IMongoDbContext context)
        {
            DbContext = (DbContext) context;
            var type = typeof(Languages);
            var assemblyFullname = type.GetTypeInfo().Assembly.FullName;
            if (string.IsNullOrEmpty(assemblyFullname))
                return;

            var assemblyName = new AssemblyName(assemblyFullname).Name;
            if (string.IsNullOrEmpty(assemblyName))
                return;

            Languages = factory.Create(type.Name, assemblyName);
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            LanguageCode = HttpContext.Items.ContainsKey(CustomRequestCultureProvider.ContextName)
                ? HttpContext.Items[CustomRequestCultureProvider.ContextName]?.ToString()
                : null;
            ViewBag.LanguageCode = LanguageCode;

            CurrentUser = HttpContext.Session.Get<CurrentUser>(CurrentUser.SessionName);
            ViewBag.CurrentUser = CurrentUser;
        }

        protected List<SelectListItem> Get_DefaultSelectItem(string text = null, bool isSelected = true) =>
            new List<SelectListItem>
            {
                new SelectListItem
                {
                    Value = "0",
                    Text = text ?? Languages["Nothing"],
                    Selected = isSelected
                }
            };

        protected void InsertUserLog( string content, params string[] parameters)
        {
            if (CurrentUser == null)
                return;

            try
            {
                new UserLogRepository(DbContext).Insert(new UserLogCollection()
                {
                    _id = new AutoIncrementIdRepository(DbContext).GetNextSequenceValue(CollectionNames.UserLogs),
                    Content = content,
                    CreatedDate = DateTime.Now,
                    IdUser = CurrentUser.IdUser,
                    Parameters = parameters ?? Array.Empty<string>()
                });
            }
            catch (Exception e)
            {
                e.WriteException();
            }
        }

        public string DoLogin(string username, string password)
        {
            try
            {
                username = username.ToLower().Trim();
                var user = new UserRepository(DbContext).FindOne(x => x.Username.Equals(username) && !x.IsDeleted);
                if (user == null || !password.VerifyBcrypt(user.Password))
                    return "Sign in information wrong";
                if (user.IsBlocked)
                    return "Your account has been blocked by administrator.";

                var currentUser = new CurrentUser()
                {
                    Fullname = user.FullName,
                    Username = user.Username,
                    IdUser = user._id
                };


                var menus = new AdminMenuRepository(DbContext).FindAll();
                var html = "";
                var parentMenus = menus.Where(x => x.IdParent == 1).OrderBy(x => x.DisplayIndex).ToList();
                foreach (var parent in parentMenus)
                {
                    if (parent.IsParent)
                    {
                        var children = menus.Where(x => x.IdParent == parent._id).OrderBy(x => x.DisplayIndex).ToList();
                        html += "<li class=\"nav-item\">";
                        html +=
                            $"<a href=\"#\" class=\"nav-link\"><i class=\"nav-icon {parent.Icon}\"></i><p>{Languages[parent.Name]}<i class=\"fas fa-angle-left right\"></i></p></a><ul class=\"nav nav-treeview\">";
                        foreach (var child in children)
                        {
                            if (child.IsParent)
                            {
                                var children2 = menus.Where(x => x.IdParent == child._id).OrderBy(x => x.DisplayIndex)
                                    .ToList();
                                html += "<li class=\"nav-item\">";
                                html +=
                                    $"<a href=\"#\" class=\"nav-link\"><i class=\"nav-icon {child.Icon}\"></i><p>{Languages[child.Name]}<i class=\"fas fa-angle-left right\"></i></p></a><ul class=\"nav nav-treeview\">";
                                foreach (var child2 in children2)
                                {
                                    html +=
                                        $"<li class=\"nav-item\"><a href=\"{child2.Url}\" class=\"nav-link\"><i class=\"nav-icon {child2.Icon}\"></i><p>{Languages[child2.Name]}</p></a>";
                                }

                                html += "</ul></li>";
                            }
                            else
                            {
                                html +=
                                    $"<li class=\"nav-item\"><a href=\"{child.Url}\" class=\"nav-link\"><i class=\"nav-icon {child.Icon}\"></i><p>{Languages[child.Name]}</p></a>";
                            }
                        }

                        html += "</ul></li>";
                    }
                    else
                    {
                        html +=
                            $"<li class=\"nav-item\"><a href=\"{parent.Url}\" class=\"nav-link\"><i class=\"nav-icon {parent.Icon}\"></i><p>{Languages[parent.Name]}</p></a>";
                    }
                }

                currentUser.HtmlMenus = html;
                CurrentUser = currentUser;
                ViewBag.CurrentUser = CurrentUser;
                HttpContext.Session.Set(CurrentUser.SessionName, CurrentUser);
            }
            catch (Exception e)
            {
                e.WriteException();
                return "Error in processing";
            }

            return null;
        }

    
}