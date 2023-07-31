using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Hymalia.Models.Course;

public class LoginLiveClassRequestModel
{
    [DisplayName("Trans ID of teacher")]
    [Required(ErrorMessage = "{0} is required")]
    public string transId { get; set; }
    
    [DisplayName("Display name")]
    [Required(ErrorMessage = "{0} is required")]
    public string displayName { get; set; }
}