using Hymalia.Controllers;
using Hymalia.Extensions;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Hymalia.Attributes;

public class ValidateModelAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if (context.Result != null)
            return;
            
        base.OnActionExecuting(context);
        var controller = (BaseApiController) context.Controller;
        var errors = controller.GetValidationErrors();
        if (errors != null)
            context.Result = controller.GetJsonResult_InvalidParameters(null, errors);
    }
}