using Microsoft.AspNetCore.Http;

namespace Navi.Library.Extensions;

public static class ResponseExtension
{
    public static void SetCookie(this HttpResponse response, string key, string value = "", DateTime? expireDate = null, string domain = null)
    {
        response.Cookies.Append(key, value ?? string.Empty, new CookieOptions
        {
            Expires = expireDate ?? DateTime.Now.AddMonths(1),
            Path = "/",
            HttpOnly = false,
            IsEssential = true,
            Domain = domain
        });
    }
}