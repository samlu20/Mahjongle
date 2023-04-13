using System;
using System.Collections.Generic;

namespace mahjongle_dotnet_api.Repository;

public partial class Session
{
    public long SessionId { get; set; }

    public int[] PlayerIds { get; set; } = null!;

    public int[]? PlayerPoints { get; set; }

    public DateTime DateCreated { get; set; }

    public DateTime? DateFinished { get; set; }
}
