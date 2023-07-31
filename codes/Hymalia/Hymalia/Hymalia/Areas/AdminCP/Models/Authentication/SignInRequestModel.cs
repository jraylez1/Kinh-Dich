using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Hymalia.Areas.AdminCP.Models.Authentication
{
    public class SignInRequestModel
    {
        [DisplayName("Username")]
        [Required(ErrorMessage = "{0} is required")]
        public string username { get; set; }
        
        [DisplayName("Password")]
        [Required(ErrorMessage = "{0} is required")]
        public string password { get; set; }
        
        public bool isRemember { get; set; }
        public string returnUrl { get; set; }
    }
}