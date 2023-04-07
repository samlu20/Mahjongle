global using mahjongle_dotnet_api.Models;
using mahjongle_dotnet_api.Startup;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();
builder.Services.RegisterServices();
// builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
// {
//   builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
// }));
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
