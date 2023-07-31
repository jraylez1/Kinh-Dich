using System.Net;
using System.Text;
using Hymalia.Attributes;
using Hymalia.Common.Enums;
using Hymalia.Common.Repositories;
using Hymalia.Database.Collections;
using Hymalia.Extensions;
using Hymalia.Models.Course;
using Hymalia.Models.Zalo;
using Hymalia.Models.Zoom;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Localization;
using MongoDB.Driver;
using Navi.Library.Exceptions;
using Navi.Library.Extensions;
using Navi.MongoDb;
using Newtonsoft.Json;
using JoinRequestModel = Hymalia.Models.Zalo.JoinRequestModel;

namespace Hymalia.Controllers;

public class ZaloController : BaseApiController
{
    private readonly ILogger<ZaloController> _logger;
    private readonly IConfiguration _configuration;
    
    public ZaloController(IStringLocalizerFactory factory, IMongoDbContext context,ILogger<ZaloController> logger, IConfiguration configuration) : base(factory, context)
    {
        _logger = logger;
        _configuration = configuration;
    }

    public override void OnActionExecuting(ActionExecutingContext context)
    {
        base.OnActionExecuting(context);
        var authorization = Request.GetAuthorization();
        if (string.IsNullOrEmpty(authorization) || !authorization.Equals("Basic " + _configuration["Zalo:ApiAccessToken"]))
            throw new HttpException(403, Languages["Access denied"]);
    }

    private IActionResult GetTextResult(string text = null)
    {
        return Json(new
        {
            Text = text ?? Languages["Error in processing"]
        });
    }

    private IActionResult GetButtonsResult(string text, List<ZaloButton> buttons)
    {
        return Json(new
        {
            Version = "chatbot",
            Content = new
            {
                Messages = new List<object>
                {
                    new
                    {
                        Type = "text",
                        Text = text,
                        Buttons = buttons
                    }
                }
            }
        });
    }

    [HttpPost("Zalo/Register"), ValidateModel]
    [Produces("application/json")]
    [ProducesResponseType(typeof(JsonResult), 200)]
    [ProducesResponseType(typeof(JsonResult), 500)]
    public IActionResult Register([FromBody] RegisterRequestModel model)
    {
        try
        {
            var mobile = model.Mobile.Trim();
            if (string.IsNullOrEmpty(mobile))
                return GetTextResult(Languages["{0} is required", Languages["Mobile"]]);
            
            if (!model.Mobile.IsMobileNumber())
                return GetTextResult(Languages["Invalid {0}", Languages["Mobile"]]);

            var register = new RegisterCourseRepository(DbContext).FindOne(x => x.Mobile.Equals(mobile) && !x.IsDeleted);
            if (register != null)
            {
                if (register.IdStatus == 1 || register.IdStatus == 2)
                    return GetTextResult(Languages["{0} has been used", Languages["Mobile"]]);
                
                if (register.IdStatus == 3)
                    return GetTextResult(Languages["Please pay for registered course"]);
            }
            
            var registerCourse = new RegisterCourseCollection
            {
                _id = new AutoIncrementIdRepository(DbContext).GetNextSequenceValue(CollectionNames.RegisterCourses),
                Address = string.Empty,
                Age = 0,
                Diseases = string.Empty,
                Email = string.Empty,
                Mobile = mobile,
                CreatedDate = DateTime.Now,
                FullName = model.FullName,
                IdStatus = 1,
                IsDeleted = false,
                ModifiedDate = DateTime.Now,
                IdZaloUser = model.UserId,
                IDCreator = 1,
                IDModified = 1
            };
            
            new RegisterCourseRepository(DbContext).Insert(registerCourse);
            return GetTextResult(Languages["Register successful. Please wait admin approve"]);
        }
        catch (Exception e)
        {
            _logger.LogError(e, LogTags.Error);
        }

        return GetTextResult();
    }
    
    [HttpPost("Zalo/Join"),ValidateModel]
    [Produces("application/json")]
    [ProducesResponseType(typeof(JsonResult), 200)]
    [ProducesResponseType(typeof(JsonResult), 500)]
    public IActionResult Join([FromBody] JoinRequestModel model)
    {
        try
        {
            var registerCourse = new RegisterCourseRepository(DbContext).FindOne(x => model.UserId.Equals(x.IdZaloUser) && x.IdStatus == 2);
            if (registerCourse == null)
            {
                registerCourse = new RegisterCourseRepository(DbContext).Find(x => model.UserId.Equals(x.IdZaloUser)).SortByDescending(x => x.CreatedDate).FirstOrDefault();
                if (registerCourse == null)
                    return GetTextResult(Languages["Please register course before use this feature"]);

                switch (registerCourse.IdStatus)
                {
                    case 1:
                        return GetTextResult(Languages["Please wait admin approve"]);
                    case 2:
                        break;
                    case 3:
                        return GetTextResult(Languages["Please pay for registered course"]);
                    default:
                        return GetTextResult(Languages["Your request has been cancelled. Please register again"]);
                }
            }

            var student = new StudentRepository(DbContext).FindOne(x => x.IdRegisterCourse == registerCourse._id);
            if (student == null)
                return GetTextResult(Languages["Please register course before use this feature"]);
            
            var section = _configuration.GetSection("Settings");
            var transId = section.GetValue<string>("TransId");
            
            var url = "https://trans.naviconference.com/RestApi/Service/JoinMeetingVer2";
            using var webClient = new WebClient
            {
                Encoding = Encoding.UTF8, 
                Headers =
                {
                    ["Content-Type"] = "application/json",
                }
            };

            var data = new
            {
                transId,
                displayName = registerCourse.FullName,
                applicatonAllowFreeJoinMeeting = "Yes",
                languageCode = "vi-VN"
            };
                
            var response = webClient.UploadString(url, "POST",JsonConvert.SerializeObject(data));
            if (string.IsNullOrEmpty(response))
                return GetTextResult(Languages["Server is not connected"]);

            var arr = response.Split("|");
            var status = arr[0];
            var result = arr.Length > 1 ? arr[1] : response;
            
            if (status.Equals("NOSTART"))
                return GetTextResult(Languages[result]);

            if (status.Equals("OK"))
            {
                var convertResult = JsonConvert.DeserializeObject<LoginLiveClassResultModel>(result);
                if (convertResult == null)
                    return this.GetJsonResult_InvalidParameters();

                var link = Url.Action("Join", "Zoom", new Models.Zoom.JoinRequestModel
                {
                    Key = registerCourse._id.ToString(),
                    AccessToken = new JoinAccessToken
                    {
                        MeetingId = convertResult.MeetingID,
                        DisplayName = convertResult.DisplayName,
                        Password = convertResult.Password
                    }.ToString(student._id.ToString())
                }, Request.Scheme) ?? "";
                
                return GetButtonsResult(Languages["Please press to below button to access class room", link],
                    new List<ZaloButton>
                    {
                        new ZaloButton
                        {
                            Name = Languages["Join now"],
                            Type = "url",
                            Url = link
                        }
                    });
            }


            return GetTextResult(result);
        }
        catch (Exception e)
        {
            _logger.LogError(e, LogTags.Error);
        }

        return GetTextResult();
    }
    
    private class ZaloButton
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Url { get; set; }
    }
}