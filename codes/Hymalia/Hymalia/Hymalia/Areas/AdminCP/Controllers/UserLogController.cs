using Hymalia.Areas.AdminCP.Attributes;
using Hymalia.Areas.AdminCP.Extensions;
using Hymalia.Areas.AdminCP.Models.UserLog;
using Hymalia.Common.Enums;
using Hymalia.Common.Repositories;
using Hymalia.Database.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Localization;
using MongoDB.Bson;
using MongoDB.Driver;
using Navi.Library;
using Navi.Library.Extensions;
using Navi.MongoDb;

namespace Hymalia.Areas.AdminCP.Controllers
{
    public class UserLogController : BaseController
    {
        private UserLogRepository _repository;
      
        private readonly ILogger<UserLogController> _logger;
        public UserLogController(IStringLocalizerFactory factory, IMongoDbContext context,ILogger<UserLogController> logger) : base(factory, context)
        {
            _logger = logger;
        }
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            _repository = new UserLogRepository(DbContext);
        }

        [HttpGet, LoginRequired]
        public ActionResult Index()
        {
            try
            {
                var users = new UserRepository(DbContext).Find(x => !x.IsDeleted).ToList()
                    .Select(x => new SelectListItem
                    {
                        Value = x._id.ToString(),
                        Text = x.FullName
                    }).OrderBy(x=>x.Text).ToList();
                var listUser = Get_DefaultSelectItem();
                listUser.AddRange(users);
                ViewBag.Users = listUser;
                return View();
            }
            catch (Exception e)
            {
                _logger.LogError(e, LogTags.Error);
            }

            return this.GetJsonResult();
        }

        [HttpPost, LoginRequired]
        public ActionResult Search(IndexRequestModel model)
        {
            try
            {
                var filters = Builders<UserLogCollection>.Filter.Empty;
                
                if (!string.IsNullOrEmpty(model.fromDate))
                {
                    var date = model.fromDate.ToDateTime(Languages);
                    if (date != Constants.EmptyDate)
                    {
                        filters &= Builders<UserLogCollection>.Filter.Gte(x => x.CreatedDate, date);
                    }
                }

                if (!string.IsNullOrEmpty(model.toDate))
                {
                    
                    var date = model.toDate.ToDateTime(Languages);
                    if (date != Constants.EmptyDate)
                    {
                        filters &= Builders<UserLogCollection>.Filter.Lte(x => x.CreatedDate, date.AddDays(1));
                    }
                }

                if (model.idUser > 0)
                {
                    filters &= Builders<UserLogCollection>.Filter.Eq(x => x.IdUser, model.idUser);
                }

                if (!string.IsNullOrEmpty(model.keyword))
                {
                    filters &= Builders<UserLogCollection>.Filter.Regex(x => x.Content, new BsonRegularExpression(model.keyword, "i"));
                }
                
                if (filters == FilterDefinition<UserLogCollection>.Empty)
                    return this.GetJsonResult(string.Empty, false,model.GetResponse(this),0);
                
                var response = model.GetResponseModel(_repository.Count(filters));
                
                var list = _repository
                    .Find(filters)
                    .Sort(model.GetSortBy(this))
                    .Skip(model.start)
                    .Limit(model.length)
                    .ToList();
                
                var data = new List<List<string>>();
                var users = new UserRepository(DbContext).FindByIds(list.Select(x => x.IdUser).ToList());
                foreach (var item in list)
                {
                    var content = item.Parameters?.Any() == true
                        ? string.Format(Languages[item.Content],item.Parameters.ToArray<object>())
                        : Languages[item.Content];
                    var row = new List<string>
                    {
                        model.GetDisplayOrderText(),
                        item.CreatedDate.ToString("dd/MM/yyyy"),
                        users.FirstOrDefault(x => x._id == item.IdUser)?.FullName ?? string.Empty,
                        content
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
    }
}