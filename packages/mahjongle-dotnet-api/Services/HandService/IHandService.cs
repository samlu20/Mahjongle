using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mahjongle_dotnet_api.Services.HandService
{
  public interface IHandService
  {
    // int GetHandScore(GroupedHand groupedHand);
    int GetHandScore(GroupedHand groupedHand, ref string debugString);
  }
}