using MongoDB.Bson.Serialization.Attributes;
using Navi.MongoDb.Attributes;

namespace Hymalia.Database.Collections;

[CollectionName(CollectionNames.Users)]
public class UserCollection : BaseCollection
{
    [BsonId]
    public long _id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public string FullName { get; set; }
    public bool IsBlocked { get; set; }
    public bool IsDeleted { get; set; }
}