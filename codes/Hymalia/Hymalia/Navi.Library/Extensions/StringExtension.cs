using System.Text;
using System.Text.RegularExpressions;

namespace Navi.Library.Extensions;

public static class StringExtension
{
    public static bool IsMatchPattern(this string str, string pattern)
    {
        var regex = new Regex(pattern);
        return regex.IsMatch(str);
    }

    public static bool IsEmail(this string str)
    {
        return str.IsMatchPattern(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$");
    }
    
    public static bool IsMobileNumber(this string str)
    {
        return str.IsMatchPattern(@"^(0|\+)\d{9,12}$");
    }

    public static string ReplaceVietnamCharacters(this string text)
    {
        if (string.IsNullOrEmpty(text))
            return string.Empty;

        var regex = new Regex(@"\p{IsCombiningDiacriticalMarks}+");
        var strFormD = text.Normalize(NormalizationForm.FormD);
        return regex.Replace(strFormD, string.Empty).Replace('\u0111', 'd').Replace('\u0110', 'D');
    }

    public static string GetRandomString(int length)
    {
        const string characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var str = string.Empty;
        var random = new Random();
        for (var i = 0; i < length; i++)
            str += characters[random.Next(characters.Length)];
        
        return str;
    }

    public static string RemoveHtmlTags(this string input)
    {
        var str = Regex.Replace(input, @"<br ?\/?>", "\r\n", RegexOptions.IgnoreCase);
        return Regex.Replace(str, "<.*?>", string.Empty);
    }

    public static string GetVietNamMobileNumber(this string phone, string prefix = "84")
    {
        return prefix + (phone.Length > 9 ? phone.Substring(phone.Length - 9) : phone);
    }

    public static string ToUpperFirstLetter(this string input)
    {
        if (string.IsNullOrEmpty(input))
            return string.Empty;
        
        return input.First().ToString().ToUpper() + input.Substring(1);
    }
    
    public static string ToFriendlyUrl(this string subject)
    {
        subject = subject.Trim().ToLower();
        subject = subject.ReplaceVietnamCharacters();
        subject = Regex.Replace(subject, @"\s+", "-");
        subject = Regex.Replace(subject, @"[^A-Za-z0-9_-]", "");
        return subject;
    }

    public static string ReplaceBreakLine(this string str, string replacement = "<br />") => str == null ? string.Empty : Regex.Replace(str, @"\r\n?|\n", replacement);

    public static string GetPhoneLink(this string phone)
    {
        if (string.IsNullOrEmpty(phone))
            return string.Empty;

        return "tel:" + new string(phone.Where(char.IsDigit).ToArray());
    }
}