using System;
using System.Collections.Generic;

namespace mahjongle_dotnet_api.Repository;

public partial class Tile
{
    public string Key { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Value { get; set; } = null!;

    public int? NumValue { get; set; }

    public string Suit { get; set; } = null!;

    public virtual Suit SuitNavigation { get; set; } = null!;
}
