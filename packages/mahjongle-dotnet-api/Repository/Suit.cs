using System;
using System.Collections.Generic;

namespace mahjongle_dotnet_api.Repository;

public partial class Suit
{
    public string Value { get; set; } = null!;

    public virtual ICollection<Tile> Tiles { get; set; } = new List<Tile>();
}
