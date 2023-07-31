using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace Hymalia.Models.Zalo;

public class JoinRequestModel
{
    [DisplayName("User ID")]
    [Required(ErrorMessage = "{0} is required")]
    public string UserId { get; set; }
}