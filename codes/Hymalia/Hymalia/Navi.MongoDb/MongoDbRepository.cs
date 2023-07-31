using System.Linq.Expressions;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Navi.MongoDb.Attributes;

namespace Navi.MongoDb;

public class MongoDbRepository<T>
{
    protected readonly DbContext DbContext;
    protected readonly IMongoCollection<T> Collection;
    public readonly string CollectionName;

    public MongoDbRepository(DbContext dbContext, string collectionName = null)
    {
        DbContext = dbContext;
        CollectionName = collectionName ?? ProcessGenericClass();
        Collection = DbContext.GetCollection<T>(CollectionName);
    }
    
    private string ProcessGenericClass()
    {
        var type = typeof(T);
        var collectionName = string.Empty;
        var customAttributes = type.GetCustomAttributes(typeof(CollectionNameAttribute), false);
        foreach (var customAttribute in customAttributes)
        {
            var attribute = (CollectionNameAttribute) customAttribute;
            collectionName = attribute.Name;
        }

        if (string.IsNullOrEmpty(collectionName))
        {
            collectionName = type.Name;
            if (collectionName.EndsWith("Collection"))
                collectionName = collectionName.Substring(0, collectionName.Length - 10);
        }
        
        return collectionName;
    }
    
    public virtual void CreateIndexes()
    {
        
    }

    public virtual void InitData()
    {
        
    }
    
    public T FindOne(FilterDefinition<T> filters)
    {
        return Collection.Find(filters).FirstOrDefault();
    }

    public T FindOne(Expression<Func<T, bool>> filter)
    {
        return Collection.Find(filter).FirstOrDefault();;
    }

    public List<T> FindAll()
    {
        return Collection.Find(Builders<T>.Filter.Empty).ToList();
    }
    
    public IFindFluent<T, T> Find(FilterDefinition<T> filters)
    {
        return Collection.Find(filters);
    }

    public IFindFluent<T, T> Find(Expression<Func<T, bool>> filter)
    {
        return Collection.Find(filter);
    }
    
    public IFindFluent<T, T> Find(BsonDocument filter)
    {
        return Collection.Find(filter);
    }

    public virtual void Insert(IEnumerable<T> documents)
    {
        Collection.InsertMany(documents);
    }

    public virtual void Insert(T document)
    {
        Collection.InsertOne(document);
    }
    
    public DeleteResult DeleteOne(Expression<Func<T, bool>> filter)
    {
        return Collection.DeleteOne(filter);
    }

    public DeleteResult DeleteOne(FilterDefinition<T> filters)
    {
        return Collection.DeleteOne(filters);
    }
    
    public DeleteResult DeleteMany(Expression<Func<T, bool>> filter)
    {
        return Collection.DeleteMany(filter);
    }

    public DeleteResult DeleteMany(FilterDefinition<T> filters)
    {
        return Collection.DeleteMany(filters);
    }

    public DeleteResult DeleteAll()
    {
        return Collection.DeleteMany(Builders<T>.Filter.Empty);
    }

    public long Count(FilterDefinition<T> filters)
    {
        return Collection.CountDocuments(filters);
    }
    
    public long Count(Expression<Func<T, bool>> filters)
    {
        return Collection.CountDocuments(filters);
    }
    
    public ReplaceOneResult ReplaceOne(Expression<Func<T, bool>> filter, T document)
    {
        return Collection.ReplaceOne(filter, document);
    }

    public ReplaceOneResult ReplaceOne(FilterDefinition<T> filters, T document)
    {
        return Collection.ReplaceOne(filters, document);
    }
    
    public IAggregateFluent<T> Aggregate()
    {
        return Collection.Aggregate();
    }

    public IMongoQueryable<T> AsQueryable()
    {
        return Collection.AsQueryable();
    }

    public UpdateResult UpdateMany(FilterDefinition<T> filter,  UpdateDefinition<T> update,  UpdateOptions options = null,  CancellationToken cancellationToken = default)
    {
        return Collection.UpdateMany(filter, update, options, cancellationToken);
    }
    
    public UpdateResult UpdateOne(FilterDefinition<T> filter,  UpdateDefinition<T> update,  UpdateOptions options = null,  CancellationToken cancellationToken = default)
    {
        return Collection.UpdateOne(filter, update, options, cancellationToken);
    }
}