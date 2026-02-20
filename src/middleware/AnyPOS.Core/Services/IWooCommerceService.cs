using AnyPOS.Core.Models;

namespace AnyPOS.Core.Services;

public interface IWooCommerceService
{
    Task<string?> CreateOrderAsync(Order order, CancellationToken cancellationToken = default);
    Task<List<Product>> GetProductsAsync(CancellationToken cancellationToken = default);
}
