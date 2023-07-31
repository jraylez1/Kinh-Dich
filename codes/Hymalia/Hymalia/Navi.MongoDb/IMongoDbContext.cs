using MongoDB.Driver;

namespace Navi.MongoDb;

public interface IMongoDbContext
{
    IMongoCollection<T> GetCollection<T>(string collectionName, params object[] parameters);
}