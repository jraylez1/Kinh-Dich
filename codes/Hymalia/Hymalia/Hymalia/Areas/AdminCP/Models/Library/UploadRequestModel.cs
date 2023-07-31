using Microsoft.AspNetCore.Http;

namespace  Hymalia.Areas.AdminCP.Models.Library
{
    public class UploadRequestModel
    {
        public IFormFile file { get; set; }

        public string dir { get; set; } = string.Empty;

        public string filename { get; set; }

        public string type { get; set; }
        public string module { get; set; }
        public string deletePath { get; set; } = string.Empty;
    }
}