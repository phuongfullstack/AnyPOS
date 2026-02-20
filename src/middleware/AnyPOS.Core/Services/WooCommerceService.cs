using System.Net.Http.Json;
using System.Text.Json;
using AnyPOS.Core.Models;
using Microsoft.Extensions.Logging;

namespace AnyPOS.Core.Services;

public class WooCommerceService : IWooCommerceService
{
    private readonly HttpClient _httpClient;
    private readonly ILogger<WooCommerceService> _logger;

    public WooCommerceService(HttpClient httpClient, ILogger<WooCommerceService> logger)
    {
        _httpClient = httpClient;
        _logger = logger;
    }

    public async Task<string?> CreateOrderAsync(Order order, CancellationToken cancellationToken = default)
    {
        try
        {
            var payload = BuildWcOrderPayload(order);
            var response = await _httpClient.PostAsJsonAsync("orders", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadFromJsonAsync<JsonElement>(cancellationToken: cancellationToken);
            return result.GetProperty("id").ToString();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to create WooCommerce order for PosOrderId={PosOrderId}", order.PosOrderId);
            return null;
        }
    }

    public async Task<List<Product>> GetProductsAsync(CancellationToken cancellationToken = default)
    {
        try
        {
            var response = await _httpClient.GetAsync("products", cancellationToken);
            response.EnsureSuccessStatusCode();
            var items = await response.Content.ReadFromJsonAsync<JsonElement[]>(cancellationToken: cancellationToken);
            return items?.Select(MapProduct).ToList() ?? new List<Product>();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to fetch WooCommerce products");
            return new List<Product>();
        }
    }

    private static object BuildWcOrderPayload(Order order) => new
    {
        status = "processing",
        line_items = order.Items.Select(i => new
        {
            product_id = i.WcProductId ?? i.ProductId,
            quantity = i.Quantity,
            price = i.UnitPrice.ToString("F2")
        })
    };

    private static Product MapProduct(JsonElement el) => new()
    {
        WcProductId = el.GetProperty("id").ToString(),
        Name = el.GetProperty("name").GetString() ?? string.Empty,
        Price = decimal.TryParse(el.GetProperty("price").GetString(), out var p) ? p : 0,
        UpdatedAt = DateTime.UtcNow
    };
}
