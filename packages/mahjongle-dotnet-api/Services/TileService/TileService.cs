using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;
using mahjongle_dotnet_api.Repository;
using mahjongle_dotnet_api.Services;

namespace mahjongle_dotnet_api.Services.TileService
{
  public class TileService : ITileService
  {

    // private static List<Tile> tileHand = new List<Tile> {
    //     new Tile { Value = "S"},
    //     new Tile { Value = "E" }
    // };

    // private static Tile northWindTile = new Tile { Value = "N" };

    // DataBaseService _databaseService;

    // TileService(DataBaseService databaseService)
    // {
    //   _databaseService = databaseService;
    // }

    public async Task<ServiceResponse<List<Tile>>> GetBambooTiles()
    {
      /*
      // SELECT * FROM tile WHERE suit = 'bamboo';
      var serviceResponse = new ServiceResponse<List<Tile>>();
      serviceResponse.Data = new List<Tile> {
            new Tile { Suit = TileSuit.Bamboo, Key = "1B", Value = "1" },
            new Tile { Suit = TileSuit.Bamboo, Key = "2B", Value = "2" },
            new Tile { Suit = TileSuit.Bamboo, Key = "3B", Value = "3" },
            new Tile { Suit = TileSuit.Bamboo, Key = "4B", Value = "4" },
            new Tile { Suit = TileSuit.Bamboo, Key = "5B", Value = "5" },
            new Tile { Suit = TileSuit.Bamboo, Key = "6B", Value = "6" },
            new Tile { Suit = TileSuit.Bamboo, Key = "7B", Value = "7" },
            new Tile { Suit = TileSuit.Bamboo, Key = "8B", Value = "8" },
            new Tile { Suit = TileSuit.Bamboo, Key = "9B", Value = "9" },
        };
      return serviceResponse;
      */
      // Connect to a PostgreSQL database
      var connection = new NpgsqlConnection("Host=mahjongle-db.corvffpxyrd6.us-east-2.rds.amazonaws.com; Database=mahjongle; Username=postgres; Password=MinsshiFaker#3");
      // var connection = _databaseService.GetDatabaseConnection();
      connection.Open();

      // Define a query
      var command = new NpgsqlCommand("SELECT key, name FROM tile WHERE suit = 'wind';", connection);

      // Execute the query and obtain a result set
      NpgsqlDataReader reader = command.ExecuteReader();

      var serviceResponse = new ServiceResponse<List<Tile>>();
      serviceResponse.Data = new List<Tile>();

      // Output rows
      while (reader.Read())
      {
        serviceResponse.Data.Add(new Tile { Key = (string)reader[0], Suit = (string)reader[1] });
      }

      connection.Close();
      return serviceResponse;
    }

    public async Task<ServiceResponse<List<Tile>>> GetCharacterTiles()
    {
      // SELECT * FROM tile WHERE suit = 'char';
      var serviceResponse = new ServiceResponse<List<Tile>>();
      serviceResponse.Data = new List<Tile> {
            new Tile { Suit = TileSuit.Character, Key = "1C", Value = "1" },
            new Tile { Suit = TileSuit.Character, Key = "2C", Value = "2" },
            new Tile { Suit = TileSuit.Character, Key = "3C", Value = "3" },
            new Tile { Suit = TileSuit.Character, Key = "4C", Value = "4" },
            new Tile { Suit = TileSuit.Character, Key = "5C", Value = "5" },
            new Tile { Suit = TileSuit.Character, Key = "6C", Value = "6" },
            new Tile { Suit = TileSuit.Character, Key = "7C", Value = "7" },
            new Tile { Suit = TileSuit.Character, Key = "8C", Value = "8" },
            new Tile { Suit = TileSuit.Character, Key = "9C", Value = "9" },
        };
      return serviceResponse;
    }

    public async Task<ServiceResponse<List<Tile>>> GetDotTiles()
    {
      // SELECT * FROM tile WHERE suit = 'dot';
      var serviceResponse = new ServiceResponse<List<Tile>>();
      serviceResponse.Data = new List<Tile> {
            new Tile { Suit = TileSuit.Dot, Key = "1D", Value = "1" },
            new Tile { Suit = TileSuit.Dot, Key = "2D", Value = "2" },
            new Tile { Suit = TileSuit.Dot, Key = "3D", Value = "3" },
            new Tile { Suit = TileSuit.Dot, Key = "4D", Value = "4" },
            new Tile { Suit = TileSuit.Dot, Key = "5D", Value = "5" },
            new Tile { Suit = TileSuit.Dot, Key = "6D", Value = "6" },
            new Tile { Suit = TileSuit.Dot, Key = "7D", Value = "7" },
            new Tile { Suit = TileSuit.Dot, Key = "8D", Value = "8" },
            new Tile { Suit = TileSuit.Dot, Key = "9D", Value = "9" },
        };
      return serviceResponse;
    }

    public async Task<ServiceResponse<List<Tile>>> GetFlowerTiles()
    {
      // SELECT * FROM tile WHERE suit = 'flower';
      var serviceResponse = new ServiceResponse<List<Tile>>();
      serviceResponse.Data = new List<Tile> {
            new Tile { Suit = TileSuit.Flower, Key = "SF", Value = "S" },
            new Tile { Suit = TileSuit.Flower, Key = "UF", Value = "U" },
            new Tile { Suit = TileSuit.Flower, Key = "FF", Value = "F" },
            new Tile { Suit = TileSuit.Flower, Key = "WF", Value = "W" },
            new Tile { Suit = TileSuit.Flower, Key = "OF", Value = "O" },
            new Tile { Suit = TileSuit.Flower, Key = "PF", Value = "P" },
            new Tile { Suit = TileSuit.Flower, Key = "CF", Value = "C" },
            new Tile { Suit = TileSuit.Flower, Key = "BF", Value = "B" },
        };
      return serviceResponse;
    }

    public async Task<ServiceResponse<List<Tile>>> GetHonorTiles()
    {
      // SELECT * FROM tile WHERE suit = 'wind' OR suit = 'dragon';
      var serviceResponse = new ServiceResponse<List<Tile>>();
      serviceResponse.Data = new List<Tile> {
            new Tile { Suit = TileSuit.Wind, Key = "NW", Value = "N" },
            new Tile { Suit = TileSuit.Wind, Key = "EW", Value = "E" },
            new Tile { Suit = TileSuit.Wind, Key = "SW", Value = "S" },
            new Tile { Suit = TileSuit.Wind, Key = "WW", Value = "W" },
            new Tile { Suit = TileSuit.Wind, Key = "RD", Value = "R" },
            new Tile { Suit = TileSuit.Wind, Key = "WD", Value = "W" },
            new Tile { Suit = TileSuit.Wind, Key = "GD", Value = "G" },
        };
      return serviceResponse;
    }
  }
}