using MongoDB.Bson.Serialization.Attributes;
using Navi.MongoDb.Attributes;

namespace Hymalia.Database.Collections;

[CollectionName(CollectionNames.AppAccessTokens)]
public class AppAccessTokenCollection
{
    [BsonId]
    public string Id { get; set; }

    public string AccessToken { get; set; }
    
    [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
    public DateTime ExpDate { get; set; }
}