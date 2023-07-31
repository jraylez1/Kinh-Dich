using Hymalia.Database.Collections;
using MongoDB.Driver;
using Navi.MongoDb;

namespace Hymalia.Common.Repositories;

public class RegisterCourseRepository : BaseRepository<RegisterCourseCollection>
{
    public RegisterCourseRepository(DbContext dbContext, string collectionName = null) : base(dbContext, collectionName)
    {
    }
    
    public List<RegisterCourseCollection> FindByIds(List<long> ids) =>
        Find(x => !x.IsDeleted && ids.Contains(x._id)).ToList();
    
    public RegisterCourseCollection FindById(long id) =>
        Find(x=> x._id == id && !x.IsDeleted).FirstOrDefault();


    public void InitData()
    {
        Insert(new RegisterCourseCollection
        {
            _id = 1,
            Address = "Thái bình/Việt nam",
            Age = 23,
            Diseases = "Không có",
            Email = "Loihel717@gmail.com",
            Mobile = "0932584061",
            CreatedDate = DateTime.Now,
            FullName = "Nguyen van loi",
            IdStatus = 1,
            IsDeleted = false,
            ModifiedDate = DateTime.Now,
            IDCreator = 9999,
            IDModified = 9999
        });
    }
}