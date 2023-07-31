using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Navi.Library.Extensions;

namespace Navi.Library.Localization;

public class CustomRequestCultureProvider : RequestCultureProvider
{
    public const string SessionName = "LanguageCode";
    public const string ContextName = "LanguageCode";
    public const string HeaderName = "Content-Language";
    public const string CookieName = "CookieName";

    public CustomRequestCultureProvider(RequestLocalizationOptions options)
    {
        Options = options;
    }
    
    public override Task<ProviderCultureResult> DetermineProviderCultureResult(HttpContext httpContext)
    {
        if (httpContext == null)
            throw new ArgumentNullException(nameof(httpContext));

        var culture = httpContext.Session.GetString(SessionName);
        if (string.IsNullOrEmpty(culture))
        {
            var request = httpContext.Request;
            culture = request.Cookies[CookieName];
            if (string.IsNullOrEmpty(culture))
            {
                culture = request.GetHeader(HeaderName);
                if (string.IsNullOrEmpty(culture))
                    culture = Options.DefaultRequestCulture.Culture.Name;

                httpContext.Response.SetCookie(CookieName, culture);
            }
            
            httpContext.Session.SetString(SessionName, culture);
        }
        
        httpContext.Items.Add(ContextName, culture);
        return Task.FromResult(new ProviderCultureResult(culture, culture));
    }
}