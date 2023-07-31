using System.Text.RegularExpressions;
using Hymalia.Database.Collections;
using Microsoft.Extensions.Configuration;
using Navi.MongoDb;

namespace Hymalia.Common.Repositories;

public class StudentRepository : BaseRepository<StudentCollecttion>
{
    public StudentRepository(DbContext dbContext, string collectionName = null) : base(dbContext, collectionName)
    {
    }
    
    public string GetNumber(IConfiguration configuration)
    {
        var section = configuration.GetSection("Settings");
        var numberPattern = section.GetValue<string>("StudentNumber");

        var documentNumber = numberPattern;
        const string pattern = @"\{[a-zA-Z0-9_]+\:[a-zA-Z0-9]+\}";
        var match = Regex.Match(numberPattern, pattern);
        while (match.Success)
        {
            var value = match.Value;
            var values = value.Trim('{', '}').Split(':');
            var format = values[0];
            if ("date".Equals(format) && values.Length == 2)
                documentNumber = documentNumber.Replace(value, DateTime.Now.ToString(values[1]));

            if (new[] {"number", "number_in_year", "number_in_month"}.Contains(format))
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "Shared", "Student", "Numbers");
                if ("number_in_year".Equals(format))
                    path = Path.Combine(path, DateTime.Now.Year.ToString("D4"));
    
                if ("number_in_month".Equals(format))
                    path = Path.Combine(path, DateTime.Now.ToString("yyyyMM"));

                if (!Directory.Exists(path))
                    Directory.CreateDirectory(path);

                path = Path.Combine(path, "counter.ini");
                var fileContent = File.Exists(path) ? File.ReadAllText(path) : "0";
                var fileNumber = int.Parse(fileContent);
                fileNumber++;

                File.WriteAllText(path, fileNumber.ToString("D0"));
                documentNumber = documentNumber.Replace(value,
                    values.Length == 1 ? fileNumber.ToString("D0") : fileNumber.ToString(values[1]));
            }

            match = match.NextMatch();
        }

        return documentNumber;
    }
}