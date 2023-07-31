using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Navi.MongoDb;

public class DbContext : IMongoDbContext
{
    public IMongoClient Client;
    protected IMongoDatabase Db;
    private IClientSessionHandle _transaction;
    private bool _isTransactionSuccess;

    public DbContext()
    {
        
    }

    public DbContext(IOptions<MongoDbOptions> options)
    {
        if (options == null)
            throw new ArgumentNullException();

        var dbOptions = options.Value;
        var connectionString = dbOptions.ConnectionString;
        if (string.IsNullOrEmpty(dbOptions.ConnectionString))
            throw new AggregateException($"'ConnectionString' is null or empty");

        var databaseName = dbOptions.DatabaseName;
        if (string.IsNullOrEmpty(databaseName))
            throw new AggregateException($"'DatabaseName' is null or empty");
        
        Client = string.IsNullOrEmpty(connectionString) ? new MongoClient() : new MongoClient(connectionString);
        Db = Client.GetDatabase(databaseName);
    }

    public IMongoCollection<T> GetCollection<T>(string collectionName, params object[] parameters)
    {
        return parameters == null ? Db.GetCollection<T>(collectionName) : Db.GetCollection<T>(string.Format(collectionName, parameters));
    }
    
    public void StartTransaction()
    {
        _isTransactionSuccess = true;
        _transaction = Client.StartSession();
        _transaction.StartTransaction();
    }

    public void TransactionFailed()
    {
        _isTransactionSuccess = false;
    }

    public bool EndTransaction()
    {
        if (_isTransactionSuccess)
            _transaction.CommitTransaction();
        else
            _transaction.AbortTransaction();

        return _isTransactionSuccess;
    }
}