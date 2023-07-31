using Hymalia.Areas.AdminCP.Attributes;
using Hymalia.Areas.AdminCP.Extensions;
using Hymalia.Areas.AdminCP.Models;
using Hymalia.Areas.AdminCP.Models.RegisterCourse;
using Hymalia.Common.Enums;
using Hymalia.Common.Enums.RegisterCourse;
using Hymalia.Common.Repositories;
using Hymalia.Database.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Localization;
using MongoDB.Bson;
using MongoDB.Driver;
using Navi.Library.Extensions;
using Navi.MongoDb;

namespace Hymalia.Areas.AdminCP.Controllers;

public class RegisterCourseController : BaseController
{
    private RegisterCourseRepository _repository;
        
    private readonly ILogger<RegisterCourseController> _logger;
    private readonly IConfiguration _configuration;
    public RegisterCourseController(IStringLocalizerFactory factory, IMongoDbContext context,ILogger<RegisterCourseController> logger, IConfiguration configuration) : base(factory, context)
    {
        _logger = logger;
        _configuration = configuration;
    }
        
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        base.OnActionExecuting(context);
        _repository = new RegisterCourseRepository(DbContext);
    }
    
     [HttpGet, LoginRequired]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost, LoginRequired]
        public ActionResult Search(IndexRequestModel model)
        {
            try
            {
                var filters = Builders<RegisterCourseCollection>.Filter.Eq(x => x.IsDeleted, false);
                if (!string.IsNullOrEmpty(model.keyword))
                {
                    filters &= Builders<RegisterCourseCollection>.Filter.Regex(x => x.FullName,
                        new BsonRegularExpression(model.keyword, "i"));
                }
                
                if (!string.IsNullOrEmpty(model.mobile))
                {
                    filters &= Builders<RegisterCourseCollection>.Filter.Regex(x => x.Mobile,
                        new BsonRegularExpression(model.mobile, "i"));
                }

                var response = model.GetResponseModel(_repository.Count(filters));

                var list = _repository
                    .Find(filters)
                    .Sort(model.GetSortBy(this))
                    .Skip(model.start)
                    .Limit(model.length)
                    .ToList();
             
                var data = new List<List<string>>();

                foreach (var item in list)
                {
                    var functions = "<div class=\"text-center\"><div class=\"btn-group\">";
                    functions +=
                            $"<a type=\"button\" class=\"btn btn-secondary btn-xs\" href=\"{@Url.Action("Detail","RegisterCourse",new {id = item._id})}\"><i class=\"fas fa fa-info\"></i> {Languages["Detail"]}</a>";
                    functions +=
                        $"<button type=\"button\" class=\"btn btn-warning btn-xs\" onclick=\"editRegister('{item._id.ToString()}')\"><i class=\"fas fa fa-pencil-alt\"></i> {Languages["Edit"]}</button>";
                    functions +=
                            $"<button type=\"button\" class=\"btn btn-danger btn-xs\" onclick=\"window.RegisterCourse.execDelete('{item._id.ToString()}')\"><i class=\"fas fa fa-trash\"></i> {Languages["Delete"]}</button>";
                    functions += "</div></div>";
                    
                    var row = new List<string>
                    {
                        model.GetDisplayOrderText(),
                        $"<div class=\"text-center\"><div class=\"icheck-primary d-inline\"><input type=\"checkbox\" class=\"selector\" id=\"selector_{item._id}\" value=\"{item._id}\"/><label for=\"selector_{item._id}\"></label></div></div>",
                        functions,
                        item.FullName,
                        item.Mobile,
                        item.CreatedDate.ToString("HH:mm dd/MM/yyyy"),
                        GetApproveStatus(item.IdStatus),
                        item.Age.ToString(),
                        item.Diseases,
                        item.Address
                    };
                    data.Add(row);
                }

                response.data = data;
                return Json(response);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return  model.GetResponse(this);
        }


        [HttpGet,ValidateModel,LoginRequired]
        public IActionResult Edit(IdLongRequestModel model)
        {
            if (model.id <= 0)
                return this.GetJsonResult_InvalidParameters();
            try
            {
                var registerCourse = new RegisterCourseRepository(DbContext).FindOne(x=> x._id == model.id && !x.IsDeleted);
                if (registerCourse == null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("Register course");

                return View(new EditRequestModel
                {
                    id = registerCourse._id,
                    address = registerCourse.Address,
                    age = registerCourse.Age,
                    diseases = registerCourse.Diseases,
                    email = registerCourse.Email,
                    mobile = registerCourse.Mobile,
                    fullName = registerCourse.FullName,
                    idStatus = registerCourse.IdStatus,
                    stausName = GetApproveStatus(registerCourse.IdStatus),
                    idZaloUser = registerCourse.IdZaloUser ?? ""
                });
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }

        [HttpPost, ValidateModel,LoginRequired]
        public IActionResult Edit(EditRequestModel model)
        {
            if (model.id <= 0)
                return this.GetJsonResult_InvalidParameters();
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
                
                var registerCourse = new RegisterCourseRepository(DbContext).FindOne(x=> x._id == model.id && !x.IsDeleted);
                if (registerCourse == null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("Register course");

                registerCourse.Address = model.address;
                registerCourse.Age = model.age;
                registerCourse.Diseases = model.diseases;
                registerCourse.Email = model.email ?? string.Empty;
                registerCourse.FullName = model.fullName;
                registerCourse.ModifiedDate = DateTime.Now;
                registerCourse.IDModified = CurrentUser.IdUser;
                
                if (!registerCourse.Mobile.Equals(model.mobile))
                {
                    var mobileExited = _repository.FindOne(x =>
                        x._id != registerCourse._id && !x.IsDeleted && x.Mobile.Equals(model.mobile));
                    if (mobileExited != null)
                        return this.GetJsonResult_ObjectHasBeenUsed(Languages["Mobile"]);
                    
                    
                    registerCourse.Mobile = model.mobile ?? string.Empty;
                    
                    var studentRepository = new StudentRepository(DbContext);
                    var student =
                        studentRepository.FindOne(x => x.IdRegisterCourse == registerCourse._id);
                    if (student != null && registerCourse.IdStatus == RegisterCourseStatus.Bought)
                    {
                        student.Number = model.mobile;
                        student.MObile = model.mobile;
                        studentRepository.ReplaceOne(x => x._id == student._id, student);
                    }
                }
                
                _repository.ReplaceOne(x => x._id == registerCourse._id, registerCourse);
                InsertUserLog("Edit register course {0}", model.fullName);

                return this.GetJsonResult(ResponseMessages.EditSuccess, false);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }

        [HttpGet, ValidateModel,LoginRequired]
        public IActionResult Detail(IdLongRequestModel model)
        {
            if (model.id <= 0)
                return this.GetJsonResult_InvalidParameters();
            try
            {
                var registerCourse = new RegisterCourseRepository(DbContext).FindOne(x=> x._id == model.id && !x.IsDeleted);
                if (registerCourse == null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("Register course");

                var number = string.Empty;
                var student = new StudentRepository(DbContext).FindOne(x => x.IdRegisterCourse == registerCourse._id);
                if (student != null)
                    number = student.Number;
                
                ViewBag.Number = number;
                return View(new EditRequestModel
                {
                    id = registerCourse._id,
                    address = registerCourse.Address,
                    age = registerCourse.Age,
                    diseases = registerCourse.Diseases,
                    email = registerCourse.Email,
                    mobile = registerCourse.Mobile,
                    fullName = registerCourse.FullName,
                    idStatus = registerCourse.IdStatus,
                    stausName = GetApproveStatusName(registerCourse.IdStatus),
                    createdAt =registerCourse.CreatedDate.ToString(Languages["FormatDateTime"]),
                    idZaloUser = registerCourse.IdZaloUser ?? ""
                });
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }
        
        [HttpPost, LoginRequired]
        [ValidateModel]
        public ActionResult Delete(List<long> ids)
        {
            try
            {
                var registerCourses = _repository.FindByIds(ids);
                if (!registerCourses.Any())
                    return this.GetJsonResult("Please select one or more items to delete");
                _repository.UpdateMany(
                    Builders<RegisterCourseCollection>.Filter.In(x => x._id, registerCourses.Select(x => x._id).ToList())
                    & Builders<RegisterCourseCollection>.Filter.Eq(x => x.IsDeleted, false)
                    , Builders<RegisterCourseCollection>.Update
                        .Set(x => x.IsDeleted, true)
                        .Set(x => x.IDModified, CurrentUser.IdUser)
                        .Set(x => x.ModifiedDate, DateTime.Now));
                var name = registerCourses.Select(x => x.FullName).Aggregate((a, b) => a + ", " + b);
                InsertUserLog("Delete register course {0}",name);

                foreach (var registerCourse in registerCourses)
                {
                    var student = new StudentRepository(DbContext).FindOne(x => x.IdRegisterCourse == registerCourse._id);
                    if (student != null)
                        new StudentRepository(DbContext).DeleteOne(x => x.IdRegisterCourse == student.IdRegisterCourse);
                }
                
                return this.GetJsonResult(ResponseMessages.DeleteSuccess, false);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }
        

        [HttpPost, ValidateModel,LoginRequired]
        public IActionResult ChangeStatus(long id, int idStatus)
        {
            if (id <= 0)
                return this.GetJsonResult_InvalidParameters();
            if (idStatus <= 0)
                return this.GetJsonResult_InvalidParameters();
            try
            {
                var registerCourse = new RegisterCourseRepository(DbContext).FindOne(x=> x._id == id && !x.IsDeleted);
                if (registerCourse == null)
                    return this.GetJsonResult_ObjectIsNotExistOrDeleted("Register course");

                var studentRepository = new StudentRepository(DbContext);
                if (idStatus != registerCourse.IdStatus)
                {
                    registerCourse.IdStatus = idStatus;
                    registerCourse.ModifiedDate = DateTime.Now;
                    registerCourse.IDModified = CurrentUser.IdUser;
                    
                    _repository.ReplaceOne(x => x._id == registerCourse._id, registerCourse);
                    InsertUserLog("Edit register course {0}",registerCourse.FullName);

                    if (idStatus == RegisterCourseStatus.Bought)
                    {
                        var students = studentRepository.Find(x => x.IdRegisterCourse == registerCourse._id);
                        if (students.Any())
                            studentRepository.DeleteMany(x => x.IdRegisterCourse == registerCourse._id);
                        
                        //var number = studentRepository.GetNumber(_configuration);
                        var number = registerCourse.Mobile;
                        var checkNumber = studentRepository.FindOne(x => x.Number.Equals(number) && x.IdRegisterCourse != registerCourse._id);
                        if (checkNumber != null)
                            return this.GetJsonResult_ObjectHasBeenUsed("Number");
                        
                        // while (checkNumber != null)
                        // {
                        //     number = studentRepository.GetNumber(_configuration);
                        //     checkNumber = studentRepository.FindOne(x => x.Number.Equals(number));
                        //     if(checkNumber == null)
                        //         break;
                        // }
                        
                        studentRepository.Insert(new StudentCollecttion
                        {
                            _id = new ObjectId(),
                            Number = number,
                            ExpDate = DateTime.Today.AddMonths(3),
                            FullName = registerCourse.FullName,
                            MObile = registerCourse.Mobile,
                            IdRegisterCourse = registerCourse._id
                        });
                    }
                }
                return this.GetJsonResult(ResponseMessages.EditSuccess, false);
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }

        private string GetApproveStatusName(int id)
        {
            if (id <= 0)
                return "";
            
            if (id == 1)
                return Languages["Waiting for pay"];

            if (id == 2)
                return Languages["Bought"];

            if (id == 3)
                return Languages["Request a repay"];

            return Languages["Refunded"];
        }
        
        private string GetApproveStatus(int id)
        {
            if (id <= 0)
                return "";
            
            if (id == 1)
                return $"<span class=\"badge badge-danger\">{Languages["Waiting for pay"]}</span>";

            if (id == 2)
                return $"<span class=\"badge badge-success\">{Languages["Bought"]}</span>";

            if (id == 3)
                return $"<span class=\"badge badge-warning\">{Languages["Request a repay"]}</span>";

            return $"<span class=\"badge badge-secondary\">{Languages["Refunded"]}</span>";
        }
}