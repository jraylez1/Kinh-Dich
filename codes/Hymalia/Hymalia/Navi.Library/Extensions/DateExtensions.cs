using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Microsoft.Extensions.Localization;
using Navi.Library.Localization;

namespace Navi.Library.Extensions
{
    public static class DateExtensions
    {
        public static DateTime ToDate(this string str, IStringLocalizer languages)
        {
            if (string.IsNullOrEmpty(str) || !DateTime.TryParseExact(str, languages["FormatDate"], null, DateTimeStyles.None, out var date))
                return Constants.EmptyDate;

            return date;
        }
        
        public static DateTime ToDateTime(this string str, IStringLocalizer languages)
        {
            if (string.IsNullOrEmpty(str) || !DateTime.TryParseExact(str, languages["FormatDateTime"], null, DateTimeStyles.None, out var date))
                return Constants.EmptyDate;

            return date;
        }
        
        public static DateTime ToDateTime(this string str, SharedLocalizer controller)
        {
            return str.ToDateTime(controller);
        }

        public static string ToDateString(this DateTime date, IStringLocalizer languages)
        {
            return date == Constants.EmptyDate ? string.Empty : date.ToString(languages["FormatDate"]);
        }
        
        public static string ToDateTimeString(this DateTime date, IStringLocalizer languages)
        {
            return date == Constants.EmptyDate ? string.Empty : date.ToString(languages["FormatDateTime"]);
        }
        

        public static long ToTimeStamp(this DateTime date, bool isSeconds = true)
        {
            var milliseconds = (long) date.Subtract(new DateTime(1970, 1, 1)).TotalMilliseconds;
            if (isSeconds)
                milliseconds = (milliseconds / 1000);
            
            return milliseconds;
        }

        public static DateTime ToDateTime(this long timeStamp, bool isSeconds = true)
        {
            return isSeconds ? new DateTime(1970, 1, 1).AddSeconds(timeStamp) : new DateTime(1970, 1, 1).AddMilliseconds(timeStamp);
        }
        
        public static byte[] ToBinary(this object obj)
        {
            if (obj == null) return null;
            var format = new BinaryFormatter();
            using var stream = new MemoryStream();
            format.Serialize(stream, obj);
            return stream.ToArray();
        }
        public static object ToObject(this byte[] binary)
        {
            using var stream = new MemoryStream();
            var format = new BinaryFormatter();
            stream.Write(binary, 0, binary.Length);
            stream.Seek(0, SeekOrigin.Begin);
            return format.Deserialize(stream);
        }
        
        public static void Shuffle<T>(this IList<T> list)  
        {  
            var rng = new Random();  
            int n = list.Count;  
            while (n > 1) {  
                n--;  
                int k = rng.Next(n + 1);  
                T value = list[k];  
                list[k] = list[n];  
                list[n] = value;  
            }  
        }
    }
}