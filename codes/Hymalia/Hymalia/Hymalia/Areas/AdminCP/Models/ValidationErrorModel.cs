namespace Hymalia.Areas.AdminCP.Models;

public class ValidationErrorModel
{
    public ValidationErrorModel()
    {
            
    }

    public ValidationErrorModel(string name, string message)
    {
        this.name = name;
        this.message = message;
    }
        
    public string name { get; set; }
    public string message { get; set; }
}