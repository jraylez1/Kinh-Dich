using System.Reflection;
using Hymalia.Areas.AdminCP.Models;
using Hymalia.Common.Repositories;
using Hymalia.Database.Collections;
using Hymalia.Resources;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Localization;
using Navi.Library;
using Navi.Library.Localization;
using Navi.MongoDb;

namespace Hymalia.Controllers;

[Route("Api")]
public class BaseApiController : Controller
{
    public readonly DbContext DbContext;
    public readonly IStringLocalizer Languages;
    public string LanguageCode;

    public BaseApiController(IStringLocalizerFactory factory, IMongoDbContext context)
    {
        DbContext = (DbContext) context;
        var type = typeof(Languages);
        var assemblyFullname = type.GetTypeInfo().Assembly.FullName;
        if (string.IsNullOrEmpty(assemblyFullname))
            return;

        var assemblyName = new AssemblyName(assemblyFullname).Name;
        if (string.IsNullOrEmpty(assemblyName))
            return;

        Languages = factory.Create(type.Name, assemblyName);
    }

    public override void OnActionExecuting(ActionExecutingContext context)
    {
        base.OnActionExecuting(context);
        LanguageCode = HttpContext.Items.ContainsKey(CustomRequestCultureProvider.ContextName)
            ? HttpContext.Items[CustomRequestCultureProvider.ContextName]?.ToString()
            : null;
        ViewBag.LanguageCode = LanguageCode;
    }


    protected void InsertUserLog(string content, params string[] parameters)
    {
        try
        {
            new UserLogRepository(DbContext).Insert(new UserLogCollection()
            {
                _id = new AutoIncrementIdRepository(DbContext).GetNextSequenceValue(CollectionNames.UserLogs),
                Content = content,
                CreatedDate = DateTime.Now,
                IdUser = 1,
                Parameters = parameters ?? Array.Empty<string>()
            });
        }
        catch (Exception e)
        {
            e.WriteException();
        }
    }
}