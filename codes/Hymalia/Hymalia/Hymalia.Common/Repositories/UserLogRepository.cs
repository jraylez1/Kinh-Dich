

using Navi.MongoDb;
using Hymalia.Database.Collections;

namespace Hymalia.Common.Repositories
{
    public class UserLogRepository : BaseRepository<UserLogCollection>
    {
        public UserLogRepository(DbContext dbContext, string collectionName = null) : base(dbContext, collectionName)
        {
        }

    }
}