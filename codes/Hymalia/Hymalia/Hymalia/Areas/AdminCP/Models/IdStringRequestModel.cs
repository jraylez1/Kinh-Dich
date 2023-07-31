using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Hymalia.Areas.AdminCP.Models
{
    public class IdStringRequestModel
    {
        [DisplayName("Id")]
        [Required(ErrorMessage = "{0} is required")]
        public string id{ get; set; }
    }
}