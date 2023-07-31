using Hymalia.Areas.AdminCP.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace Hymalia.Areas.AdminCP.Models.JqueryPlugins.DataTable
{
    public class RequestModel
    {
        public int start { get; set; }
        public int length { get; set; }
        public int draw { get; set; }

        public int displayOrder { get; set; }
        
        [BindProperty(Name = "order[0][column]")]
        public int sortColumn { get; set; }
        
        [BindProperty(Name = "order[0][dir]")]
        public string sortDir { get; set; }
        
        //public string GetSortBy(BaseController controller) => controller.Request.Form[$"columns[{sortColumn}][name]"] + " " + controller.Request.Form[sortDir]; 

        public string GetSort(BaseController controller)
        {
            return controller.Request.Form[$"columns[{sortColumn}][name]"];
        } 
        
        public string GetDir(BaseController controller)
        {
            return sortDir;
        }
        
        
        
        public string GetSortBy(BaseController controller)
        {
            return $"{{{ controller.Request.Form[$"columns[{sortColumn}][name]"]}: {("asc".Equals(sortDir, StringComparison.OrdinalIgnoreCase) ? 1 : -1)}}}";
        }
        public JsonResult GetResponse(BaseController controller, string message = null)
        {
            return new(new ResponseModel
            {
                draw = draw,
                data = new List<object>(),
                recordsFiltered = 0,
                recordsTotal = 0,
                message = message == null ? controller.Languages["Error in processing"] : controller.Languages[message]
            });
        }
        
        public JsonResult GetResponse_AccessDenied(BaseController controller) => GetResponse(controller, "Access denied");

        public ResponseModel GetResponseModel(long recordsTotal)
        {
            displayOrder = start;
            
            return new ResponseModel
            {
                data = new List<object>(),
                draw = draw,
                recordsTotal = recordsTotal,
                recordsFiltered = recordsTotal
            };
        }

        public string GetDisplayOrderText()
        {
            start++;
            return start.ToString("N0");
        }
    }
}