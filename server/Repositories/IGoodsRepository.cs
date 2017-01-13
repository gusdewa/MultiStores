using System.Collections.Generic;
using Server.Models;

namespace Server.Repositories
{
    public interface IGoodsRepository
    {
        void Add(Goods item);
        IEnumerable<Goods> GetAll();
        Goods Find(string key);
        Goods Remove(string key);
        void Update(Goods item);
    }
}
