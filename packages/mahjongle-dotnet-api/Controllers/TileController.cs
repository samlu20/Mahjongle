using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mahjongle_dotnet_api.Services.TileService;

namespace mahjongle_dotnet_api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class TileController : Controller
  {
    private readonly ITileService _tileService;

    public TileController(ITileService tileService)
    {
      this._tileService = tileService;
    }

    [HttpGet("GetBambooTiles")]
    public async Task<ActionResult<List<Tile>>> GetBambooTiles()
    {
      return Ok(await this._tileService.GetBambooTiles());
    }

    [HttpGet("GetCharacterTiles")]
    public async Task<ActionResult<List<Tile>>> GetCharacterTiles()
    {
      return Ok(await this._tileService.GetCharacterTiles());
    }

    [HttpGet("GetDotTiles")]
    public async Task<ActionResult<List<Tile>>> GetDotTiles()
    {
      return Ok(await this._tileService.GetDotTiles());
    }

    [HttpGet("GetFlowerTiles")]
    public async Task<ActionResult<List<Tile>>> GetFlowerTiles()
    {
      return Ok(await this._tileService.GetFlowerTiles());
    }

    [HttpGet("GetHonorTiles")]
    public async Task<ActionResult<List<Tile>>> GetHonorTiles()
    {
      return Ok(await this._tileService.GetHonorTiles());
    }

  }
}