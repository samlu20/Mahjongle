using System;
using System.Collections.Generic;

namespace mahjongle_dotnet_api.Repository;

public partial class User
{
    public short Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Email { get; set; }

    public DateTime DateCreated { get; set; }
}
