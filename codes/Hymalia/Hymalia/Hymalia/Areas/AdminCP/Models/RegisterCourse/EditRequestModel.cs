using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Hymalia.Areas.AdminCP.Models.RegisterCourse;

public class EditRequestModel
{
    [Required(ErrorMessage = "{0} is required")]
    public long id { get; set; }
    [DisplayName("Full name")]
    [Required(ErrorMessage = "{0} is required")]
    public string fullName { get; set; }
    [DisplayName("Mobile")]
    [Required(ErrorMessage = "{0} is required")]
    public string mobile { get; set; }
    public string email { get; set; }
    public int age { get; set; }
    public string address { get; set; }
    public string diseases { get; set; }
    public int idStatus { get; set; }
    public string stausName { get; set; }
    public string createdAt { get; set; }
    public string idZaloUser { get; set; }
}