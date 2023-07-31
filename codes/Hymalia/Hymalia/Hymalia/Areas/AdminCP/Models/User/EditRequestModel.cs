using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace  Hymalia.Areas.AdminCP.Models.User
{
    public class EditRequestModel : AddRequestModel
    {
        public long id { get; set; }

        [DisplayName("Mật khẩu")]
        public string password { get; set; }
        [DisplayName("Xác thực mật khẩu")]
        [Compare("password", ErrorMessage = "Mật khẩu xác thực không trùng với mật khẩu.")]
        public string retypePassword { get; set; }
    }
}