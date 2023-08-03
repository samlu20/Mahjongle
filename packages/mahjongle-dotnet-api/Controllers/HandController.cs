using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mahjongle_dotnet_api.Services.HandService;

namespace mahjongle_dotnet_api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class HandController : Controller
  {

    private readonly IHandService _handService;

    public HandController(IHandService handService)
    {
      this._handService = handService;
    }

    [HttpPost("CalculateHandScore")]
    public ActionResult<int> CalculateHandScore(GroupedHand groupedHand)
    {
      int score = -2;
      score = this._handService.GetHandScore(groupedHand);
      return Ok(score);
    }

    // List<Tile> hand = new List<Tile> {
    //     new Tile { Key = "1D", Value = "1" }
    // };
    
    // [HttpGet("{id}")]
    // public ActionResult<List<Tile>> GetIdHand(String id)
    // {
    //   return Ok(hand);
    // }
  }
}