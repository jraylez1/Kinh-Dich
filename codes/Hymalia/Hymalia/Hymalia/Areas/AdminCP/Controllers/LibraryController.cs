using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Hymalia.Areas.AdminCP.Attributes;
using Hymalia.Areas.AdminCP.Models.Library;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using Navi.Library;
using Navi.Library.Extensions;
using Navi.MongoDb;
using ConfigurationManager = Navi.Library.Configurations.ConfigurationManager;

namespace Hymalia.Areas.AdminCP.Controllers
{
    public class LibraryController : BaseController
    {
        private IWebHostEnvironment _env;

        public LibraryController(IStringLocalizerFactory factory, IMongoDbContext context,IWebHostEnvironment env) : base(factory, context)
        {
            _env = env;
        }

        protected List<string> DefaultParentPath() => new List<string> {_env.WebRootPath, "Shared"};

        private static string GetFilename(string extension, string filename = null)
        {
            if (!string.IsNullOrEmpty(filename))
                return filename;

            return Guid.NewGuid() + extension;
        }

        private static List<string> GetPaths(string dir, string module)
        {
            var paths = new List<string>();
            if (!string.IsNullOrEmpty(module))
                paths.Add(module);

            if (!string.IsNullOrEmpty(dir))
                paths.AddRange(dir.Replace(@"\", "/").Split('/').ToList());

            return paths;
        }

        private void DeleteFile(string path, string type = "")
        {
            try
            {
                var paths = path.Split('/').Where(x => !string.IsNullOrEmpty(x)).ToList();
                var pPaths = DefaultParentPath();
                pPaths.AddRange(paths);
                path = Path.Combine(pPaths.ToArray());

                if (type.Equals("directory"))
                {
                    if (Directory.Exists(path))
                        Directory.Delete(path);
                }
                else
                {
                    if (System.IO.File.Exists(path))
                        System.IO.File.Delete(path);
                }
            }
            catch (Exception e)
            {
                e.WriteException();
            }
        }

        [HttpPost, LoginRequired, RequestSizeLimit(long.MaxValue),
         RequestFormLimits(MultipartBodyLengthLimit = long.MaxValue)]
        protected async Task<string> Upload(UploadRequestModel model)
        {
            try
            {
                if (!string.IsNullOrEmpty(model.deletePath))
                {
                    if (model.deletePath.Contains("/Shared"))
                        model.deletePath = model.deletePath.Replace("/Shared", string.Empty);
                    DeleteFile(model.deletePath);
                }

                if (model.file == null)
                    return string.Empty;

                var extension = Path.GetExtension(model.file.FileName)?.ToLower() ?? string.Empty;
                var allowExtensions = ConfigurationManager.AppSettings.GetSection("Settings:SupportExtensions")
                    .GetChildren().Select(x => x.Value)
                    .ToList();
                if (!allowExtensions.Contains(extension))
                    return string.Empty;

                var fileType = IOExtension.GetFileType(extension);
                if (!string.IsNullOrEmpty(model.type) && !model.type.Split(',').Contains(fileType))
                    return string.Empty;

                model.filename = GetFilename(extension, model.filename);
                var paths = GetPaths(model.dir, model.module);
                var pPaths = DefaultParentPath();
                pPaths.AddRange(paths);

                var path = Path.Combine(pPaths.ToArray());
                if (!Directory.Exists(path))
                    Directory.CreateDirectory(path);

                paths.Add(model.filename);
                pPaths.Add(model.filename);

                path = Path.Combine(pPaths.ToArray());
                await using var streaming = System.IO.File.Create(path);
                await model.file.CopyToAsync(streaming);

                pPaths = new List<string> {"/Shared"};
                pPaths.AddRange(paths);
                return pPaths.Aggregate((a, b) => a + "/" + b);
            }
            catch (Exception e)
            {
                e.WriteException();
            }

            return string.Empty;
        }

    }
}