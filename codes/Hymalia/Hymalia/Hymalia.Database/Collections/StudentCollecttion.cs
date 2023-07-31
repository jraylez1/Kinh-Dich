using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Navi.MongoDb.Attributes;

namespace Hymalia.Database.Collections;
[CollectionName(CollectionNames.Students)]
public class StudentCollecttion
{
    [BsonId]
    public ObjectId _id { get; set; }

    public string Number { get; set; }
    public long IdRegisterCourse { get; set; }
    [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
    public DateTime ExpDate { get; set; }
    public string MObile { get; set; }
    public string FullName { get; set; }
}