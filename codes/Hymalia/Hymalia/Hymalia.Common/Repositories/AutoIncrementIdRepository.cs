using MongoDB.Driver;
using Navi.MongoDb;
using Hymalia.Database.Collections;

namespace Hymalia.Common.Repositories;

public class AutoIncrementIdRepository : MongoDbRepository<AutoIncrementIdCollection>
{
    public AutoIncrementIdRepository(DbContext dbContext, string collectionName = null) : base(dbContext, collectionName)
    {
    }
    
    public override void CreateIndexes()
    {
        Collection.Indexes.CreateOne(Builders<AutoIncrementIdCollection>.IndexKeys.Ascending("Name"),
            new CreateIndexOptions
            {
                Name = CollectionName + "_Index"
            }
        );
    }

    public long GetNextSequenceValue(string name, int time = 0)
    {
        var document = Collection.FindOneAndUpdate(MongoDB.Driver.Builders<AutoIncrementIdCollection>.Filter.Eq(x => x.Name, name), 
            MongoDB.Driver.Builders<AutoIncrementIdCollection>.Update.Inc(x => x.Value, 1),
            new MongoDB.Driver.FindOneAndUpdateOptions<AutoIncrementIdCollection>
            {
                IsUpsert = true
            });

        if (document != null)
            return document.Value;

        time++;
        if (time >= 3)
            throw new Exception("Cannot get auto increment ID.");
            
        return GetNextSequenceValue(name, time);
    }
        
    public long GetNextSequenceValueInSite(string name, long idSite, int time = 0)
    {
        name += "_" + idSite;
        var document = Collection.FindOneAndUpdate(MongoDB.Driver.Builders<AutoIncrementIdCollection>.Filter.Eq(x => x.Name, name), 
            MongoDB.Driver.Builders<AutoIncrementIdCollection>.Update.Inc(x => x.Value, 1),
            new MongoDB.Driver.FindOneAndUpdateOptions<AutoIncrementIdCollection>
            {
                IsUpsert = true
            });

        if (document != null)
            return document.Value;

        time++;
        if (time >= 3)
            throw new Exception("Cannot get auto increment ID.");
            
        return GetNextSequenceValueInSite(name, idSite, time);
    }
}