
using Hymalia.Areas.AdminCP.Attributes;
using Hymalia.Areas.AdminCP.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using Navi.MongoDb;

namespace Hymalia.Areas.AdminCP.Controllers;

public class HomeController : BaseController
{
    private readonly ILogger<HomeController> _logger;
    private readonly IConfiguration _configuration;
    private readonly IWebHostEnvironment _env;
    
    public HomeController(IStringLocalizerFactory factory, IMongoDbContext context, ILogger<HomeController> logger, IConfiguration configuration, IWebHostEnvironment env) : base(factory, context)
    {
        _logger = logger;
        _configuration = configuration;
        _env = env;
    }

    [HttpGet,LoginRequired]
    public IActionResult Index()
    {
        return View();
    }
}