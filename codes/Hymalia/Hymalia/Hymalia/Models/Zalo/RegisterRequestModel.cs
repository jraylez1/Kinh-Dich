using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Hymalia.Models.Zalo;

public class RegisterRequestModel
{
    [DisplayName("User ID")]
    [Required(ErrorMessage = "{0} is required")]
    public string UserId { get; set; }
    
    [DisplayName("Full name")]
    [Required(ErrorMessage = "{0} is required")]
    public string FullName { get; set; }
    
    [DisplayName("Mobile")]
    [Required(ErrorMessage = "{0} is required")]
    public string Mobile { get; set; }
}