using Navi.Library.Extensions;
using Newtonsoft.Json;

namespace Hymalia.Models.Zoom;

public class JoinAccessToken
{
    public string DisplayName { get; set; }
    public string MeetingId { get; set; }
    public string Password { get; set; }

    public string ToString(string key) => JsonConvert.SerializeObject(this).Encrypt(key);
    
    public static JoinAccessToken GetInstance(string token, string key) => JsonConvert.DeserializeObject<JoinAccessToken>(token.Decrypt(key));
}