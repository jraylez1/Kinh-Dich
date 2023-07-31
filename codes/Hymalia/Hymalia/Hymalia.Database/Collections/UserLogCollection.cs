using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Navi.MongoDb.Attributes;

namespace Hymalia.Database.Collections
{
    [CollectionName(CollectionNames.UserLogs)]
    public class UserLogCollection
    {
        [BsonId] public long _id { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime CreatedDate { get; set; }
        public long IdUser { get; set; }
        public string Content { get; set; }
        public string[] Parameters { get; set; }
    }
}