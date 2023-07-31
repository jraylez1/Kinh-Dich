namespace Hymalia.Models.Course;

public class LoginLiveClassResultModel
{
    public string MeetingID { get; set; }
    public string Token { get; set; }
    public string UserID { get; set; }
    public string Password { get; set; }
    public string DisplayName { get; set; }
    public string HostName { get; set; }
    public bool TurnOnVideo { get; set; }
    public string apiKey { get; set; }
    public string signature { get; set; }
}