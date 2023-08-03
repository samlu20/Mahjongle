using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;
using mahjongle_dotnet_api.Repository;
using mahjongle_dotnet_api.Services;

namespace mahjongle_dotnet_api.Services.HandService
{
  public class HandService : IHandService
  {
    public int GetHandScore(GroupedHand groupedHand)
    {
        int score = 0;

        if (groupedHand.FlowerTileCount > 0)
            score += groupedHand.FlowerTileCount;
        if (groupedHand.IsSingleWait) // TODO: Check if there are 4 kongs
            score += 1;
        if (groupedHand.IsSeatWind)
            score += 2;
        if (groupedHand.IsPrevalentWind)
            score += 2;
        if (groupedHand.IsConcealedHandDiscard)
            score += 2;
        if (groupedHand.IsConcealedHandSelf)
            score += 4;
        if (groupedHand.IsLastOfKind)
            score += 4;
        if (groupedHand.IsMeldedHand)
            score += 6;
        if (groupedHand.IsLastTile)
            score += 8;
        if (groupedHand.IsReplacementTile)
            score += 8;
        if (groupedHand.IsRobbingKong)
            score += 8;
        

        return score;
    }

  }
}