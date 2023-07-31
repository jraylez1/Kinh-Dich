namespace Navi.Library.Extensions;

public class IOExtension
{
    public static string GetPath(params string[] paths)
    {
        var currentDirectory = Directory.GetCurrentDirectory();
        if (paths?.Any() != true)
            return currentDirectory;
            
        var newPaths = new List<string> { currentDirectory};
        newPaths.AddRange(paths);
        return Path.Combine(newPaths.ToArray());
    }

    public static string GetFileType(string path)
    {
        var str = Path.GetExtension(path)?.ToLower() ?? string.Empty;
        if (string.IsNullOrEmpty(str)) return "file";
            
        if (".pdf".Equals(str))
            return "pdf";
        if (".png,.jpg,.gif,.bmp,.jpeg".Split(',').Contains(str))
            return "image";
        if (".webm,.mpg,.mp2,.mpeg,.mpe,.mpv,.ogg,.mp4,.m4p,.m4v,.avi,.wmv,.mov,.qt".Split(',').Contains(str))
            return "video";
        if (".mp3,.wav,.wma,.amr,.aac,.amr".Split(',').Contains(str))
            return "audio";
        if (".doc,.docx,.xsl,.xlsx,.ppt,.pptx".Split(',').Contains(str))
            return "ms office";
        return "file";
    }

    public static string GetAndCreatorDirectoryPath(params string[] paths)
    {
        var path = GetPath(paths);
        if (!Directory.Exists(path))
            Directory.CreateDirectory(path);

        return path;
    }
}