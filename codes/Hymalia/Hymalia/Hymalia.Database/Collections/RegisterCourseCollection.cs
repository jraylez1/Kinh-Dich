using MongoDB.Bson.Serialization.Attributes;
using Navi.MongoDb.Attributes;

namespace Hymalia.Database.Collections;
[CollectionName(CollectionNames.RegisterCourses)]
public class RegisterCourseCollection : BaseCollection
{
    [BsonId]
    public long _id { get; set; }
    public string FullName { get; set; }
    public string Mobile { get; set; }
    public string Email { get; set; }
    public int Age { get; set; }
    public string Address { get; set; }
    public string Diseases { get; set; }
    public string IdZaloUser { get; set; }
    public int IdStatus { get; set; }
    public bool IsDeleted { get; set; }
}