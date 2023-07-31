using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace  Hymalia.Areas.AdminCP.Models.Authentication
{
    public class ChangePasswordRequestModel
    {
        public long id { get; set; }

        [DisplayName("Mật khẩu cũ")]
        [Required(ErrorMessage = "{0} is required")]
        public string oldPassword { get; set; }
        [DisplayName("Mật khẩu mới")]
        [Required(ErrorMessage = "{0} is required")]
        public string newPassword { get; set; }

        [DisplayName("Xác thực mật khẩu mới")]
        [Required(ErrorMessage = "{0} is required")]
        [Compare("newPassword", ErrorMessage = "Mật khẩu xác thực không trùng với mật khẩu mới.")]
        public string retypePassword { get; set; }
    }
}