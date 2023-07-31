using Hymalia.Controllers;
using Microsoft.AspNetCore.Mvc;
using Navi.Library.Web.Models;

namespace Hymalia.Extensions;

public static class ControllerExtension
{
    public static JsonResult GetJsonResult(this BaseApiController controller, string message = null, bool error = true, object data = null, int code = 0)
    {
        return new JsonResult(new
        {
            Message = controller.Languages[message ?? "Error in processing"].ToString(),
            Code = code,
            Error = error,
            Data = data
        });
    }

    public static List<ValidationErrorModel> GetValidationErrors(this BaseApiController controller)
    {
        var modelState = controller.ModelState;
        if (modelState.IsValid)
            return null;

        var errors = new List<ValidationErrorModel>();
        foreach (var field in modelState.Values)
        {
            if (field.Errors.Count == 0)
                continue;

            errors.Add(new ValidationErrorModel
            {
                name = field.GetType().GetProperty("Key")?.GetValue(field) as string,
                message = field.Errors.First().ErrorMessage
            });
        }

        return errors;
    }

    public static JsonResult GetJsonResult_ObjectIsNotExistOrDeleted(this BaseApiController controller, string objectName) => controller.GetJsonResult(controller.Languages["{0} is not exist or deleted", controller.Languages[objectName]], true, null, 404);
        
    public static JsonResult GetJsonResult_ObjectHasBeenUsed(this BaseApiController controller, string objectName) => controller.GetJsonResult(controller.Languages["{0} has been used", controller.Languages[objectName]], true, null, 400);
        
    public static JsonResult GetJsonResult_ObjectIsRequired(this BaseApiController controller, string objectName, object data = null) => controller.GetJsonResult(controller.Languages["{0} is required", controller.Languages[objectName]], true, data, 400);
        
    public static JsonResult GetJsonResult_InvalidParameters(this BaseApiController controller, string message = null, object data = null) => controller.GetJsonResult(message ?? "Invalid parameters", true, data, 400);

    public static JsonResult GetJsonResult_AccessDenied(this BaseApiController controller) => controller.GetJsonResult("Access denied", true, null, 403);
        
    public static JsonResult GetJsonResult_HasBeenBlocked(this BaseApiController controller, string objectName) => controller.GetJsonResult(controller.Languages["{0} has been blocked", controller.Languages[objectName]], true, null, 403);
    
}