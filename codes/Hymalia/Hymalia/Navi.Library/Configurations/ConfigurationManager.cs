using Microsoft.Extensions.Configuration;

namespace Navi.Library.Configurations;

public class ConfigurationManager
{
    public static IConfiguration AppSettings;

    static ConfigurationManager()
    {
        AppSettings = new ConfigurationBuilder()
            .AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"), optional: true, reloadOnChange:true)
            .Build();
    }
}