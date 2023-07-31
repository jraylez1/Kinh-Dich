using Hymalia.Areas.AdminCP.Controllers;
using Hymalia.Areas.AdminCP.Extensions;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Hymalia.Areas.AdminCP.Attributes;

public class ValidateModelAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if (context.Result != null)
            return;
            
        base.OnActionExecuting(context);
        var controller = (BaseController) context.Controller;
        var errors = controller.GetValidationErrors();
        if (errors != null)
            context.Result = controller.GetJsonResult_InvalidParameters(null, errors);
    }
}