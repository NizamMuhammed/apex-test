using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetPumpsController : ControllerBase
    {
        private static readonly IEnumerable<PumpModel> _pumps = new[]
        {
            new PumpModel{Id = 1, Location = "CV1", PumpNos = 3},
            new PumpModel{Id = 2, Location = "CV2", PumpNos = 5},
            new PumpModel{Id = 3, Location = "CV4", PumpNos = 6},
            new PumpModel{Id = 4, Location = "CV8", PumpNos = 8}
        };

        //Get all locations
        [HttpGet("/api/getAll")]

        public JsonResult GetAll()
        {
            var result = _pumps.ToList();
            return new JsonResult(Ok(result));
        }

        //Get specific pump using Id property
        [HttpGet]

        public JsonResult Get(int id)
        {
            var result = _pumps.Where(i => i.Id == id).ToList();
            return new JsonResult(Ok(result));
        }

    }

}

