
using Navi.MongoDb;

namespace Hymalia.Common.Repositories
{
    public class BaseRepository<T>: MongoDbRepository<T>
    {
        public BaseRepository(DbContext dbContext, string collectionName = null) : base(dbContext, collectionName)
        {
        }
        
    }
}