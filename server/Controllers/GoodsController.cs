using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Repositories;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    public class GoodsController : Controller
    {
        public GoodsController(IGoodsRepository GoodsItems)
        {
            GoodsItems = GoodsItems;
        }

        public IGoodsRepository GoodsItems { get; set; }

        [HttpGet]
        public IEnumerable<Goods> GetAll()
        {
            return GoodsItems.GetAll();
        }
    }
}
