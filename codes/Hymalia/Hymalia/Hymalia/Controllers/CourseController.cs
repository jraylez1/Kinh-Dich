using System.Net;
using System.Text;
using Hymalia.Attributes;
using Hymalia.Common.Enums;
using Hymalia.Common.Enums.RegisterCourse;
using Hymalia.Common.Repositories;
using Hymalia.Database.Collections;
using Hymalia.Extensions;
using Hymalia.Models.Course;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Localization;
using Navi.Library.Extensions;
using Navi.MongoDb;
using Newtonsoft.Json;

namespace Hymalia.Controllers;

public class CourseController : BaseApiController
{
    private RegisterCourseRepository _repository;
    private readonly ILogger<CourseController> _logger;
    private readonly IConfiguration _configuration;
    private const string _name = "Course";
    public CourseController(IStringLocalizerFactory factory, IMongoDbContext context,ILogger<CourseController> logger, IConfiguration configuration) : base(factory, context)
    {
        _logger = logger;
        _configuration = configuration;
    }
        
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        base.OnActionExecuting(context);
        _repository = new RegisterCourseRepository(DbContext);
    }
    
    [HttpPost($"{_name}/Add"), ValidateModel]
    [Produces("application/json")]
    [ProducesResponseType(typeof(JsonResult), 200)]
    [ProducesResponseType(typeof(JsonResult), 500)]
    public IActionResult Add([FromBody] AddRequestModel model)
    {
        try
        {
            if (!string.IsNullOrEmpty(model.mobile))
            {
                if (!model.mobile.IsMobileNumber())
                    return this.GetJsonResult(Languages["Invalid {0}",Languages["Mobile"]]);
            }
                
            if (!string.IsNullOrEmpty(model.email))
            {
                if (!model.email.IsEmail())
                    return this.GetJsonResult(Languages["Invalid {0}",Languages["Email"]]);
            }

            var register = new RegisterCourseRepository(DbContext).FindOne(x => x.Mobile.Equals(model.mobile) && !x.IsDeleted);
            if (register != null)
                return this.GetJsonResult_ObjectHasBeenUsed(Languages["Mobile"]);
            
            var registerCourse = new RegisterCourseCollection
            {
                _id = new AutoIncrementIdRepository(DbContext).GetNextSequenceValue(CollectionNames.RegisterCourses),
                Address = model.address,
                Age = model.age ?? 0,
                Diseases = model.diseases,
                Email = model.email ?? string.Empty,
                Mobile = model.mobile ?? string.Empty,
                CreatedDate = DateTime.Now,
                FullName = model.fullName,
                IdStatus = 1,
                IsDeleted = false,
                ModifiedDate = DateTime.Now,
                IdZaloUser = string.Empty,
                IDCreator = 1,
                IDModified = 1
            };
            
            _repository.Insert(registerCourse);
            return this.GetJsonResult(Languages["Register successful"], false);
        }
        catch (Exception e)
        {
            _logger.LogError(e, LogTags.Error);
        }

        return this.GetJsonResult();
    }

    [HttpGet($"{_name}/CheckNumber")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(JsonResult), 200)]
    [ProducesResponseType(typeof(JsonResult), 500)]
    public IActionResult CheckNumber(string number)
    {
        if (string.IsNullOrEmpty(number))
            return this.GetJsonResult(Languages["Invalid {}",Languages["Number"]]);
        try
        {
            var student = new StudentRepository(DbContext).FindOne(x => x.Number.Equals(number));
            if (student == null)
                return this.GetJsonResult_ObjectIsNotExistOrDeleted("Number");

            var registerCourse = new RegisterCourseRepository(DbContext).FindOne(x => !x.IsDeleted && x._id == student.IdRegisterCourse);
            if (registerCourse == null)
                return this.GetJsonResult_ObjectIsNotExistOrDeleted("Register course");

            if (registerCourse.IdStatus != RegisterCourseStatus.Bought)
                return this.GetJsonResult(Languages["Your account is unpaid"]);

            var section = _configuration.GetSection("Settings");
            var transId = section.GetValue<string>("TransId");
            
            return this.GetJsonResult(string.Empty, false,new
            {
                transId,
                displayName = registerCourse.FullName
            });
        }
        catch (Exception e)
        {
            _logger.LogError(e, LogTags.Error);
        }

        return this.GetJsonResult();
    }

    [HttpPost($"{_name}/LoginLiveClass"),ValidateModel]
    [Produces("application/json")]
    [ProducesResponseType(typeof(JsonResult), 200)]
    [ProducesResponseType(typeof(JsonResult), 500)]
    public IActionResult LoginLiveClass([FromBody] LoginLiveClassRequestModel model)
    {
        try
        {
            var section = _configuration.GetSection("Settings");
            var transId = section.GetValue<string>("TransId");
            if (!model.transId.Equals(transId))
                return this.GetJsonResult(Languages["Invalid {0}",Languages["Trans ID"]]);
            
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
                model.transId ,
                model.displayName,
                applicatonAllowFreeJoinMeeting = "Yes",
                languageCode = "vi-VN"
            };
                
            var response = webClient.UploadString(url, "POST",JsonConvert.SerializeObject(data));
            if (string.IsNullOrEmpty(response))
                return this.GetJsonResult(Languages["Server is not connected"]);

            var arr = response.Split("|");
            var status = arr[0];
            var result = arr.Length > 1 ? arr[1] : response;
            
            if (status.Equals("NOSTART"))
                return this.GetJsonResult(Languages[result], true, null, 100);

            if (status.Equals("OK"))
            {
                var convertRusult = JsonConvert.DeserializeObject<LoginLiveClassResultModel>(result);
                if (convertRusult == null)
                    return this.GetJsonResult_InvalidParameters();
                
                return this.GetJsonResult(string.Empty, false,new
                {
                    convertRusult.MeetingID,
                    convertRusult.Password,
                    convertRusult.DisplayName
                });
            }
        }
        catch (Exception e)
        {
            _logger.LogError(e, LogTags.Error);
        }

        return this.GetJsonResult();
    }
    [HttpGet($"{_name}/Test")]
    public IActionResult Test()
    {
        return this.GetJsonResult("ok", false);
    }
}