using System;
using Hymalia.Areas.AdminCP.Models.JqueryPlugins.DataTable;

namespace Hymalia.Areas.AdminCP.Models.UserLog
{
    public class IndexRequestModel : RequestModel
    {
        public string keyword { get; set; }
        public long idUser { get; set; }
        public string fromDate { get; set; }
        public string toDate { get; set; }
    }
}