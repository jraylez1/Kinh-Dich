using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Localization;

namespace Navi.Library.Localization;

public class SharedLocalizer
{
    private static LocalizationOptions _options;
    private readonly IStringLocalizer _localizer;
    
    public SharedLocalizer(IStringLocalizerFactory factory, IConfiguration configuration)
    {
        if (_options == null)
        {
            _options = new LocalizationOptions();
            configuration.GetSection("Localization").Bind(_options);
        }

        var type = Type.GetType(_options.SharedResourceName);
        if (type == null)
            throw new Exception($"Class '{_options.SharedResourceName}' is not existed.");
        
        var fullName = type.GetTypeInfo().Assembly.FullName;
        if (string.IsNullOrEmpty(fullName))
            return;
            
            
        var assemblyName = new AssemblyName(fullName).Name;
        if (string.IsNullOrEmpty(assemblyName))
            return;
            
        _localizer = factory.Create(type.Name, assemblyName);
    }
    
    public LocalizedString GetText(string key, params object[] arguments)
    {
        return arguments == null ? _localizer[key] : _localizer[key, arguments];
    }
}