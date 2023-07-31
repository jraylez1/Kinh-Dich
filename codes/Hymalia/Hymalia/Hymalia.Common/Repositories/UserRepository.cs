using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using MongoDB.Driver;
using Navi.Library.Extensions;
using Navi.MongoDb;
using OfficeOpenXml;
using Hymalia.Database.Collections;

namespace Hymalia.Common.Repositories
{
    public class UserRepository : BaseRepository<UserCollection>
    {
        public UserRepository(DbContext dbContext, string collectionName = null) : base(dbContext, collectionName)
        {
        }


        public List<UserCollection> FindByIds(List<long> ids) =>
            Find(x => !x.IsDeleted && ids.Contains(x._id)).ToList();
        
         public override void InitData()
        {
            try
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "Data","Databases", "Databases.xlsx");
                var fileInfo = new FileInfo(path);
                if (!fileInfo.Exists)
                    return;

                using var excelPackage = new ExcelPackage(fileInfo);
                var sheet = excelPackage.Workbook.Worksheets.FirstOrDefault(x => x.Name.Equals("User"));
                if (sheet?.Dimension != null)
                {
                    if (sheet.Dimension.End.Column < 3 || sheet.Dimension.End.Row < 2) return;

                    for (var rowIndex = 2; rowIndex <= sheet.Dimension.Rows; rowIndex++)
                    {
                        var userName = sheet.GetValue<string>(rowIndex, 1) ?? string.Empty;
                        if (string.IsNullOrEmpty(userName)) return;

                        var password = sheet.GetValue<string>(rowIndex, 2) ?? string.Empty;
                        if (string.IsNullOrEmpty(password)) return;

                        var fullName = sheet.GetValue<string>(rowIndex, 3) ?? string.Empty;
                        if (string.IsNullOrEmpty(fullName)) return;
                        
                        var user = new UserCollection()
                        {
                            _id = 9999,
                            Username = userName,
                            Password = password.HashByBcrypt(),
                            FullName = fullName,
                            IsBlocked = false,
                            IsDeleted = false,
                            CreatedDate = DateTime.Now,
                            ModifiedDate = DateTime.Now,
                            IDCreator = 0,
                            IDModified = 0
                        };
                        if (FindOne(x => x._id == user._id) != null)
                            continue;

                        Insert(user);
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