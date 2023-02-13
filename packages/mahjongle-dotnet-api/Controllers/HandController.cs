using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace mahjongle_dotnet_api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class HandController : Controller
  {
    List<Tile> hand = new List<Tile> {
        new Tile { Key = "1D", Value = "1" }
    };

    [HttpGet("{id}")]
    public ActionResult<List<Tile>> GetIdHand(String id)
    {
      return Ok(hand);
    }
  }
}