using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using Server.Models;

namespace Server.Repositories
{
    public class GoodsRepository : IGoodsRepository
    {
        private static ConcurrentDictionary<string, Goods> _goods =
              new ConcurrentDictionary<string, Goods>();

        public GoodsRepository()
        {
            Add(new Goods { Name = "Item1" });
        }

        public IEnumerable<Goods> GetAll()
        {
            return _goods.Values;
        }

        public void Add(Goods item)
        {
            item.Key = Guid.NewGuid().ToString();
            _goods[item.Key] = item;
        }

        public Goods Find(string key)
        {
            Goods item;
            _goods.TryGetValue(key, out item);
            return item;
        }

        public Goods Remove(string key)
        {
            Goods item;
            _goods.TryRemove(key, out item);
            return item;
        }

        public void Update(Goods item)
        {
            _goods[item.Key] = item;
        }
    }
}
