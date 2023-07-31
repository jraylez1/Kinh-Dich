
using MongoDB.Bson.Serialization.Attributes;
using Navi.MongoDb.Attributes;

namespace Hymalia.Database.Collections
{
    [CollectionName(CollectionNames.AdminMenus)]
    public class AdminMenuCollection
    {
        [BsonId] public long _id { get; set; }
        public long IdParent { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public string CssClass { get; set; }
        public string Url { get; set; }
        public int DisplayIndex { get; set; }
        public bool IsParent { get; set; }
    }
}