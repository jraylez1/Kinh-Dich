namespace Hymalia.Areas.AdminCP.Models.JqueryPlugins.Select2
{
    public class ResponseModel
    {
        public ResponseModel()
        {
            total_count = 0;
            items = new List<ItemModel>();
        }
        public int total_count { get; set; }
        public List<ItemModel> items { get; set; }
    }
}