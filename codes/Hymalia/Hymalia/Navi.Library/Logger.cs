using Navi.Library.Configurations;

namespace Navi.Library;

public static class Logger
{
    public enum LoggerTypes
    {
        Exception,
        Information,
        Warning
    }
        
    private static readonly List<string> AllowedTypes;
        
    static Logger()
    {
        AllowedTypes = ConfigurationManager.AppSettings.GetSection("Logger:AllowedTypes").GetChildren().Select(x => x.Value).ToList();
    }
        
    public static bool WriteLog(this object obj, string type)
    {
        try
        {
            if (AllowedTypes.Any() && !AllowedTypes.Contains(type))
                return false;

            var path = Path.Combine(Directory.GetCurrentDirectory(), "Shared", "Loggers", type);
            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);
                
            var now = DateTime.Now;
            path = Path.Combine(path, $"{now:yyyyMMdd}.txt");
            File.AppendAllText(path, $"[{now:HH:mm:ss.fff}] {obj} {Environment.NewLine} {Environment.NewLine}");
        }
        catch
        {
            return false;
        }
            
        return true;
    }

    public static bool WriteLog(this object obj, LoggerTypes type)
    {
        return obj.WriteLog(type.ToString());
    }

    public static bool WriteException(this object exception)
    {
        return exception.WriteLog(LoggerTypes.Exception);
    }

    public static bool WriteInfo(this object obj)
    {
        return obj.WriteLog(LoggerTypes.Information);
    }

    public static bool WriteWarn(this object obj)
    {
        return obj.WriteLog(LoggerTypes.Warning);
    }
}