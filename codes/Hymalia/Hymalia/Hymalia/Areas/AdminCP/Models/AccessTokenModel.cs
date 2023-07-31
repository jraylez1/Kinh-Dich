using System;
using Navi.Library.Extensions;
using Newtonsoft.Json;

namespace Hymalia.Areas.AdminCP.Models
{
    public class AccessTokenModel
    {
        public static string CookieName => "AccessToken";
        public string Username { get; set; }
        public string Password { get; set; }
        public string RandomKey { get; set; }
        public DateTime ExpDate { get; set; }
        public long IdUser { get; set; }
        
        public static AccessTokenModel GetInstance(string accessToken, bool isRequired = false)
        {
            accessToken = accessToken.JwtDecode();
            var instance = JsonConvert.DeserializeObject<AccessTokenModel>(accessToken);
            if (instance == null || instance.ExpDate < DateTime.Now)
            {
                if (isRequired)
                    return new AccessTokenModel
                    {
                        Username = instance?.Username ?? string.Empty
                    };

                return null;
            }

            instance.Password = instance.Password.JwtDecode(instance.RandomKey);
            return instance;
        }

        public override string ToString()
        {
            var randomKey = StringExtension.GetRandomString(10);
            return JsonConvert.SerializeObject(new AccessTokenModel
            {
                Username = Username,
                Password = Password.JwtEncode(randomKey),
                RandomKey = randomKey,
                ExpDate = DateTime.Now.AddMonths(1),
                IdUser = IdUser
            }).JwtEncode();
        }
    }
}