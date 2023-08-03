public class GroupedHand
{
    public List<TileGroup> TileGroupList { get; set; }
    public int FlowerTileCount { get; set; }
    public bool IsSingleWait { get; set; }
    public bool IsSeatWind { get; set; }
    public bool IsPrevalentWind { get; set; }
    public bool IsLastOfKind { get; set; }
    public bool IsLastTile { get; set; }
    public bool IsReplacementTile { get; set; }
    public bool IsRobbingKong { get; set; }
    public bool IsMeldedHand { get; set; }
    public bool IsConcealedHandDiscard { get; set; }
    public bool IsConcealedHandSelf { get; set; }

}