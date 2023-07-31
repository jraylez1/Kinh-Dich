using System;
using System.IO;
using System.Linq;
using Navi.MongoDb;
using OfficeOpenXml;
using Hymalia.Database.Collections;

namespace  Hymalia.Common.Repositories
{
    public class AdminMenuRepository : BaseRepository<AdminMenuCollection>
    {
        public AdminMenuRepository(DbContext dbContext, string collectionName = null) : base(dbContext, collectionName)
        {
        }

        public override void InitData()
        {
            try
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "Data","Databases", "Databases.xlsx");
                var fileInfo = new FileInfo(path);
                if (!fileInfo.Exists)
                    return;

                using var excelPackage = new ExcelPackage(fileInfo);
                var sheet = excelPackage.Workbook.Worksheets.FirstOrDefault(x => x.Name.Equals("AdminMenu"));
                if (sheet?.Dimension != null)
                {
                    if(sheet.Dimension.End.Row < 2 || sheet.Dimension.End.Column < 7) return;
                    
                    for (var rowIndex = 2; rowIndex <= sheet.Dimension.Rows; rowIndex++)
                    {
                        var isParent = sheet.GetValue<int>(rowIndex, 7);
                        var menu = new AdminMenuCollection()
                        {
                            _id = sheet.GetValue<int>(rowIndex,1),
                            IdParent = sheet.GetValue<int>(rowIndex, 2),
                            Name = sheet.GetValue<string>(rowIndex,3) ?? string.Empty,
                            Icon = sheet.GetValue<string>(rowIndex,4) ?? string.Empty,
                            Url  = sheet.GetValue<string>(rowIndex,5) ?? string.Empty,
                            DisplayIndex = sheet.GetValue<int>(rowIndex,6),
                            IsParent = isParent == 1,
                            CssClass = string.Empty
                        };
                        if (FindOne(x => x._id == menu._id) != null)
                            continue;
                        
                        Insert(menu);
                    }
                }
            }
            catch (Exception e)
            {
               Console.WriteLine(e);
            }
        }
    }
}