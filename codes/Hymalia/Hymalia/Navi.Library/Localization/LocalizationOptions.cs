using System.Globalization;

namespace Navi.Library.Localization;

public class LocalizationOptions
{
    private CultureInfo _defaultCulture;
    
    private CultureInfo[] _supportedCultures;
    
    public string ResourcesPath { get; set; }
    public string SharedResourceName { get; set; }
    public string DefaultCultureName { get; set; }
    public string[] SupportedCultures { get; set; }

    public CultureInfo GetDefaultCulture()
    {
        _defaultCulture ??= new CultureInfo(DefaultCultureName);
        return _defaultCulture;
    }

    public CultureInfo[] GetSupportedCultures()
    {
        _supportedCultures ??= SupportedCultures?.Select(x => new CultureInfo(x)).ToArray();
        return _supportedCultures;
    }
}