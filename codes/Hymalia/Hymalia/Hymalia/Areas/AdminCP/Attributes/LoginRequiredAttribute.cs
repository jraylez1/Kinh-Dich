
using Hymalia.Areas.AdminCP.Controllers;
using Hymalia.Areas.AdminCP.Extensions;
using Hymalia.Areas.AdminCP.Models;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Navi.Library.Extensions;

namespace Hymalia.Areas.AdminCP.Attributes
{
    public class LoginRequiredAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            if (context.Result != null)
                return;

            var controller = (BaseController) context.Controller;
            if (controller.CurrentUser == null)
            {
                var httpContext = context.HttpContext;
                var ckAccessToken = httpContext.Request.Cookies[AccessTokenModel.CookieName];
                if (!string.IsNullOrEmpty(ckAccessToken))
                {
                    var accessToken = AccessTokenModel.GetInstance(ckAccessToken);
                    if (accessToken != null && !string.IsNullOrEmpty(accessToken.Username))
                        controller.DoLogin(accessToken.Username, accessToken.Password);
                }

                if (controller.CurrentUser == null)
                {
                    if (httpContext.Request.IsAjax())
                    {
                        if (controller.Request.GetContentTypes().Contains("text/html"))
                            context.Result = controller.GetJsonResult_AccessDenied();
                        else
                            context.Result = controller.GetJsonResult("Session end please sign-in again", true, 403);
                    }
                    else
                    {
                        var url = httpContext.Request.GetDisplayUrl();
                        context.Result = new RedirectToRouteResult(new RouteValueDictionary(new
                            {controller = "Authentication", action = "SignIn",areas = "AdminCP", redirectUrl = url}));
                    }
                }
            }
        }
    }
}