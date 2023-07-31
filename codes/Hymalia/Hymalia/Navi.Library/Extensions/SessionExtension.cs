using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace Navi.Library.Extensions;

public static class SessionExtension
{
    public static T Get<T>(this ISession session, string key)
    {
        var json = session.GetString(key);
        if (string.IsNullOrEmpty(json))
            return default(T);

        return JsonConvert.DeserializeObject<T>(json);
    }

    public static void Set(this ISession session, string key, object obj)
    {
        session.SetString(key, JsonConvert.SerializeObject(obj));
    }
}