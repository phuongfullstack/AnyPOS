using AnyPOS.Core.Services;
using AnyPOS.Api.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();

builder.Services.AddScoped<ITaxCalculationService, TaxCalculationService>();
builder.Services.AddHttpClient<IWooCommerceService, WooCommerceService>(client =>
{
    var baseUrl = builder.Configuration["WooCommerce:BaseUrl"] ?? "https://example.com/wp-json/wc/v3/";
    client.BaseAddress = new Uri(baseUrl);
});
builder.Services.AddHttpClient<ISinvoiceService, SinvoiceService>(client =>
{
    var baseUrl = builder.Configuration["Sinvoice:BaseUrl"] ?? "https://sinvoice.viettel.vn/api/";
    client.BaseAddress = new Uri(baseUrl);
    client.Timeout = TimeSpan.FromSeconds(30);
});
builder.Services.AddHostedService<BackgroundSyncService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseAuthorization();
app.MapControllers();
app.MapHub<PosHub>("/hubs/pos");

app.Run();

public partial class Program { }
