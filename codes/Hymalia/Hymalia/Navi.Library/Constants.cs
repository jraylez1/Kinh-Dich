using Microsoft.Extensions.Configuration;
using Navi.Library.Configurations;
using ConfigurationManager = Navi.Library.Configurations.ConfigurationManager;

namespace Navi.Library;

public class Constants
{
    public static readonly RecaptchaSection RecaptchaSettings = new RecaptchaSection();
    public static readonly string HashKey;
    public static readonly DateTime EmptyDate;
    static Constants()
    {
        EmptyDate = new DateTime(1, 1, 1);
        var config = ConfigurationManager.AppSettings.GetSection("Recaptcha");
        config.Bind(RecaptchaSettings);
        
        var appSettings = ConfigurationManager.AppSettings.GetSection("AppSettings");
        HashKey = appSettings.GetValue<string>("HashKey");
        if (string.IsNullOrEmpty(HashKey))
            HashKey = "Hu11Tr@";
    }
}