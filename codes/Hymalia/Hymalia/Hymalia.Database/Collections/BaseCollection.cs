using System;
using MongoDB.Bson.Serialization.Attributes;

namespace Hymalia.Database.Collections
{
    public class BaseCollection
    {
        public long IDCreator { get; set; }
        
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime CreatedDate { get; set; }
        
        public long IDModified { get; set; }
        
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime ModifiedDate { get; set; }
    }
}