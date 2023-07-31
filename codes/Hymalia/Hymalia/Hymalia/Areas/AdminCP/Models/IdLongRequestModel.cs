using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace  Hymalia.Areas.AdminCP.Models
{
    public  class IdLongRequestModel
    {
        [DisplayName("Id")]
        [Required(ErrorMessage = "{0} is required")]
        public long id{ get; set; }
        
    }
}