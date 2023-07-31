namespace Hymalia.Areas.AdminCP.Models.JqueryPlugins.DataTable

{
    public class ResponseModel
    {
        public string message { get; set; }
        public int draw { get; set; }
        public object data { get; set; }
        public long recordsFiltered { get; set; }
        public long recordsTotal { get; set; }
    }
}