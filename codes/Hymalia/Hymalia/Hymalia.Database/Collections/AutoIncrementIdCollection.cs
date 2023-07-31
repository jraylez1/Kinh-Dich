using MongoDB.Bson;
using Navi.MongoDb.Attributes;

namespace Hymalia.Database.Collections;

[CollectionName(CollectionNames.AutoIncrementIds)]
public class AutoIncrementIdCollection
{
    public ObjectId _id { get; set; }
    public string Name { get; set;  }
    public long Value { get; set;  }
}