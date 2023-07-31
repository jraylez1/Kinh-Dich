using System;
using System.Collections.Generic;

namespace  Hymalia.Areas.AdminCP.Models
{
    [Serializable]
    public class CurrentUser
    {
        public static string SessionName => "CurrentUser";

        public string Fullname { get; set; }
        public string Username { get; set; }
        public string HtmlMenus { get; set; }
        public long IdUser { get; set; }
    }
}