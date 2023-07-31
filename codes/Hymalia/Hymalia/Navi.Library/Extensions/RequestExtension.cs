using Microsoft.AspNetCore.Http;

namespace Navi.Library.Extensions;

public static class RequestExtension
{
    public static string GetHeader(this HttpRequest request, string key) => request.Headers[key];
        
    public static bool IsAjax(this HttpRequest request) => "XMLHttpRequest".Equals(request.GetHeader("X-Requested-With"));
    
    public static string GetRefererUrl(this HttpRequest request) => request.GetHeader("referer");

    public static string GetUserAgent(this HttpRequest request) => request.GetHeader("User-Agent");
    
    public static string GetAuthorization(this HttpRequest request) => request.GetHeader("Authorization");

    public static List<string> GetContentTypes(this HttpRequest request) => request.GetHeader("Content-Type")?.Split(';').Select(x => x.Trim()).ToList() ?? new List<string>();

    public static string GetClientIp(this HttpRequest request)
    {
        var ip = request.GetHeader("X-Real-IP");
        if (string.IsNullOrEmpty(ip))
            ip = request.GetHeader("X-Forwarded-For");

        return ip;
    }
}