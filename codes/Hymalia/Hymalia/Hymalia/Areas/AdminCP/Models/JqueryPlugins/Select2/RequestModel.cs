namespace Hymalia.Areas.AdminCP.Models.JqueryPlugins.Select2
{
    public class RequestModel
    {
        public string q { get; set; }
        public int page { get; set; } = 1;
        public int take { get; set; } = 10;
        public bool showDefault { get; set; } = false;
        public string defaultText { get; set; }
        public string defaultValue { get; set; }

        //Skip
        public int Offset
        {
            get
            {
                var skip = (page - 1) * take;
                if (showDefault && page > 1)
                    return skip - 1;

                return skip;
            }
        }
        
        //Limit
        public int Limit => showDefault && page == 1 ? take - 1 : take;
    }
}