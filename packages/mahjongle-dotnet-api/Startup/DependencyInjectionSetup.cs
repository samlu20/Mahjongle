using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mahjongle_dotnet_api.Services.TileService;

namespace mahjongle_dotnet_api.Startup
{
  public static class DependencyInjectionSetup
  {
    public static IServiceCollection RegisterServices(this IServiceCollection services)
    {
      services.AddEndpointsApiExplorer();
      services.AddSwaggerGen();
      services.AddScoped<ITileService, TileService>();

      return services;
    }
  }
}