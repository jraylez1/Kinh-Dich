using Hymalia.Areas.AdminCP.Extensions;
using Hymalia.Common.Enums;
using Hymalia.Common.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Localization;
using Navi.MongoDb;

namespace Hymalia.Areas.AdminCP.Controllers;

public class InitDataController : BaseController
{
    private readonly ILogger<InitDataController> _logger;
    
    public InitDataController(IStringLocalizerFactory factory, IMongoDbContext context, ILogger<InitDataController> logger) : base(factory, context)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        try
        {
            new AdminMenuRepository(DbContext).InitData();
            new UserRepository(DbContext).InitData();
            //new RegisterCourseRepository(DbContext).InitData();

        }
        catch (Exception e)
        {
            _logger.LogError(e, LogTags.Error);
        }

        return this.GetJsonResult();
    }
    
    
}