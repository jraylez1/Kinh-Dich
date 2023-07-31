using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Hymalia.Models.Course;

public class AddRequestModel
{
    [DisplayName("Full name")]
    [Required(ErrorMessage = "{0} is required")]
    public string fullName { get; set; }
    [DisplayName("Mobile")]
    [Required(ErrorMessage = "{0} is required")]
    public string mobile { get; set; }
    public string email { get; set; }
    public int? age { get; set; }
    public string address { get; set; }
    public string diseases { get; set; }
}