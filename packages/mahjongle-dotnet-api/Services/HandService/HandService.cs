using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Npgsql;
using mahjongle_dotnet_api.Repository;
using mahjongle_dotnet_api.Services;
using mahjongle_dotnet_api.Models;

namespace mahjongle_dotnet_api.Services.HandService
{
  public class HandService : IHandService
  {
    public int GetHandScore(GroupedHand groupedHand, ref string debugString)
    {

        if (!ValidateHand(groupedHand))
            return -1;

        int score = 0;

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

        if (groupedHand.TileGroupList.Count > 5) {
            // Combines with Fully Concealed Hand if Self-Drawn.
            if (IsThirteenOrphans(groupedHand)) {
                if (groupedHand.IsConcealedHandSelf)
                    score = 88 + 4;
                else
                    score = 88;
            }
        }

        if (groupedHand.FlowerTileCount > 0)
            score += groupedHand.FlowerTileCount;

        return score;
    }

    // TODO: Validate key
    private bool ValidateHand(GroupedHand hand) 
    {
        IDictionary<string, int> tileKeys = new Dictionary<string, int>();
        int tileCount = 0;

        foreach (TileGroup group in hand.TileGroupList)
        {
            foreach (string key in group.TileKeyList)
            {
                if(tileKeys.ContainsKey(key))
                {
                    if (tileKeys[key] == 4) {
                        return false;
                    }
                    tileKeys[key] = tileKeys[key] + 1;
                } 
                else
                {
                    tileKeys.Add(key, 1);
                }
            }
            tileCount += group.TileKeyList.Count;
        }

        return tileCount > 13 && tileCount < 19 ? true : false;
    }

    private bool IsThirteenOrphans(GroupedHand hand) 
    {
        var orphanKeyHashSet = new HashSet<string>();
        orphanKeyHashSet.UnionWith(new[] {
            TileEnum.BambooOne,
            TileEnum.BambooNine,
            TileEnum.CharacterOne,
            TileEnum.CharacterNine,
            TileEnum.DotOne,
            TileEnum.DotNine,
            TileEnum.DragonGreen,
            TileEnum.DragonRed,
            TileEnum.DragonWhite,
            TileEnum.WindEast,
            TileEnum.WindNorth,
            TileEnum.WindSouth,
            TileEnum.WindWest,
        });
        
        string doubleKey = "";
        var handKeyHashSet = new HashSet<string>();
        foreach (TileGroup group in hand.TileGroupList)
        {
            foreach (string tileKey in group.TileKeyList)
            {
                if (handKeyHashSet.Contains(tileKey) && doubleKey == "") 
                    doubleKey = tileKey;
                else if (handKeyHashSet.Contains(tileKey) && doubleKey != "") 
                    return false;
                else
                    handKeyHashSet.Add(tileKey);
            }
        }

        handKeyHashSet.ExceptWith(orphanKeyHashSet);
        
        return handKeyHashSet.Count == 0 && doubleKey != "";
    }

  }
}