global using mahjongle_dotnet_api.Models;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using mahjongle_dotnet_api.Startup;
using mahjongle_dotnet_api.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// builder.Services.AddDbContext<TileContext>(
//   o => o.UseNpgsql(builder.Configuration.GetConnectionString("MahjongleDatabase")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();
builder.Services.RegisterServices();

builder.Services.AddCors(policyBuilder =>
  policyBuilder.AddDefaultPolicy(policy =>
    policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod()
  )
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
  // UseCors invocation must be placed between UseRouting and UseEndpoints invocations if they are present
  app.UseCors("corsapp");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

/*
Console.WriteLine("HelloWorld");
ReadTiles();

static void ReadTiles()
{
  // var dbContext = new MahjongleContext();
  // var logs = dbContext.Tiles.ToList();
  // foreach (var item in logs)
  // {
  //   Console.WriteLine(item.Name);
  // }

  // Connect to a PostgreSQL database
  var connection = new NpgsqlConnection("Host=mahjongle-db.corvffpxyrd6.us-east-2.rds.amazonaws.com; Database=mahjongle; Username=postgres; Password=MinsshiFaker#3");
  connection.Open();

  // Define a query
  var command = new NpgsqlCommand("SELECT Key, Name FROM tile;", connection);

  // Execute the query and obtain a result set
  NpgsqlDataReader reader = command.ExecuteReader();

  // Output rows
  while (reader.Read())
  {
    Console.Write("{0}\t{1} \n", reader[0], reader[1]);
  }

  connection.Close();
}
*/