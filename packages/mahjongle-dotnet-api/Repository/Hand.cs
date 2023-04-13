using System;
using System.Collections.Generic;

namespace mahjongle_dotnet_api.Repository;

public partial class Hand
{
    public int Id { get; set; }

    public short UserId { get; set; }

    public string[]? ConcealedTiles { get; set; }

    public string[]? RevealedTiles { get; set; }

    public string? WinningTile { get; set; }

    public DateTime CreatedAt { get; set; }
}
