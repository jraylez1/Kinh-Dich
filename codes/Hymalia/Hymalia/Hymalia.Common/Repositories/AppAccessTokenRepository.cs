using System.Collections.Specialized;
using System.Net;
using System.Text;
using Hymalia.Database.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Navi.MongoDb;

namespace Hymalia.Common.Repositories;

public class AppAccessTokenRepository : MongoDbRepository<AppAccessTokenCollection>
{
    private readonly IConfiguration _configuration;
    
    public AppAccessTokenRepository(DbContext dbContext) : base(dbContext)
    {
        _configuration = null;
    }
    
    public AppAccessTokenRepository(DbContext dbContext, IConfiguration configuration) : base(dbContext)
    {
        _configuration = configuration;
    }

    // public IActionResult GetZaloAccessToken()
    // {
    //     const string id = "Zalo";
    //     var objToken = FindOne(x => "Zalo".Equals(x.Id));
    //     if (objToken == null || objToken.ExpDate < DateTime.Now)
    //     {
    //         using var webClient = new WebClient
    //         {
    //             Encoding = Encoding.UTF8
    //         };
    //
    //         var binary = webClient.UploadValues("https://oauth.zaloapp.com/v4/oa/access_token", new NameValueCollection
    //         {
    //             {"secret_key", _configuration["Zalo:SecretKey"]},
    //             {"refresh_token", "refresh_token"},
    //             {"app_id", _configuration["Zalo:SecretKey"]},
    //             {"grant_type", "refresh_token"}
    //         });
    //     }
    // }
}