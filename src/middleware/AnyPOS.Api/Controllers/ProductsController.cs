using AnyPOS.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace AnyPOS.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IWooCommerceService _wcService;
    private readonly ILogger<ProductsController> _logger;

    public ProductsController(IWooCommerceService wcService, ILogger<ProductsController> logger)
    {
        _wcService = wcService;
        _logger = logger;
    }

    [HttpGet("sync")]
    public async Task<IActionResult> SyncProducts(CancellationToken cancellationToken)
    {
        _logger.LogInformation("POS pulling products from WooCommerce");
        var products = await _wcService.GetProductsAsync(cancellationToken);
        return Ok(products);
    }
}
