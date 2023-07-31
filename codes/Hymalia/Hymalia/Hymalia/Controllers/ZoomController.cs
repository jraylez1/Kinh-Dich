using System.Web;
using Hymalia.Common.Enums;
using Hymalia.Common.Repositories;
using Hymalia.Models.Zoom;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using Navi.Library.Exceptions;
using Navi.Library.Extensions;
using Navi.MongoDb;

namespace Hymalia.Controllers;

public class ZoomController : Controller
{
    private readonly ILogger<ZoomController> _logger;
    private readonly DbContext _dbContext;

    public ZoomController(IMongoDbContext context, ILogger<ZoomController> logger)
    {
        _dbContext = (DbContext) context;
        _logger = logger;
    }

    [HttpGet("Zoom/Join")]
    public IActionResult Join([FromQuery] JoinRequestModel model)
    {
        if (string.IsNullOrEmpty(model.AccessToken) || string.IsNullOrEmpty(model.Key))
            throw new HttpException(404, "Not found");
        
        try
        {
            var registerCourse = new RegisterCourseRepository(_dbContext).FindById(long.Parse(model.Key));
            if (registerCourse == null || registerCourse.IsDeleted || registerCourse.IdStatus != 2)
                goto NotFoundResult;
            
            var student = new StudentRepository(_dbContext).FindOne(x => x.IdRegisterCourse == registerCourse._id);
            if (student == null)
                goto NotFoundResult;

            var tokenObj = JoinAccessToken.GetInstance(model.AccessToken, student._id.ToString());
            if (tokenObj == null)
                goto NotFoundResult;

            var userAgent = Request.GetUserAgent()?.ToLower() ?? string.Empty;
            if (!userAgent.Contains("iphone") && !userAgent.Contains("ipad") && !userAgent.Contains("ipod") && !userAgent.Contains("android") && !userAgent.Contains(""))
                ViewBag.OpenUrl = $"zoommtg://zoom.us/join?action=join&confno={tokenObj.MeetingId}&uid={HttpUtility.UrlEncode(tokenObj.DisplayName)}&uname={HttpUtility.UrlEncode(tokenObj.DisplayName)}&browser=chrome&pwd={tokenObj.Password}";
            else
                ViewBag.OpenUrl = $"zoomus://zoom.us/join?action=join&confno={tokenObj.MeetingId}&uid={HttpUtility.UrlEncode(tokenObj.DisplayName)}&uname={HttpUtility.UrlEncode(tokenObj.DisplayName)}&browser=chrome&pwd={tokenObj.Password}";
            
            return View();
        }
        catch (Exception e)
        {
            _logger.LogError(e, LogTags.Error);
        }
        
        NotFoundResult:
            throw new HttpException(404, "Not found");
        
        throw new HttpException(404, "Not found");
    }
}