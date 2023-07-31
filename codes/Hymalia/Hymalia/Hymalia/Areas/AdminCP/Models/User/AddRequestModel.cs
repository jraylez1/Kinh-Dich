using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace  Hymalia.Areas.AdminCP.Models.User
{
    public class AddRequestModel
    {
        [DisplayName("Tên đăng nhập")]
        [Required(ErrorMessage = "{0} is required")]
        public string userName { get; set; }
        [DisplayName("Mật khẩu")]
        [Required(ErrorMessage = "{0} is required")]
        public string password { get; set; }
        [DisplayName("Xác thực mật khẩu")]
        [Required(ErrorMessage = "{0} is required")]
        [Compare("password", ErrorMessage = "Mật khẩu xác thực không trùng với mật khẩu.")]
        public string retypePassword { get; set; }
        [DisplayName("Họ và tên")]
        [Required(ErrorMessage = "{0} is required")]
        public string fullName { get; set; }
        public bool isBlocked { get; set; }
    }
}