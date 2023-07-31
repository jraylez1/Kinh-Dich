using System.Collections.Generic;
using Hymalia.Areas.AdminCP.Models.JqueryPlugins.DataTable;

namespace  Hymalia.Areas.AdminCP.Models.User
{
    public class IndexRequestModel : RequestModel
    {
        public string fullName { get; set; }
        public string userName { get; set; }
    }
}