using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mahjongle_dotnet_api.Services.TileService
{
  public interface ITileService
  {
    Task<ServiceResponse<List<Tile>>> GetBambooTiles();
    Task<ServiceResponse<List<Tile>>> GetCharacterTiles();
    Task<ServiceResponse<List<Tile>>> GetDotTiles();
    Task<ServiceResponse<List<Tile>>> GetFlowerTiles();
    Task<ServiceResponse<List<Tile>>> GetHonorTiles();
  }
}