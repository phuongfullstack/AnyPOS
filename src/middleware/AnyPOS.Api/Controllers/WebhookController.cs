using Microsoft.AspNetCore.Mvc;

namespace AnyPOS.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WebhookController : ControllerBase
{
    private readonly ILogger<WebhookController> _logger;

    public WebhookController(ILogger<WebhookController> logger)
    {
        _logger = logger;
    }

    [HttpPost("woocommerce/product-updated")]
    public IActionResult WooCommerceProductUpdated([FromBody] object payload)
    {
        _logger.LogInformation("WooCommerce product webhook received");
        return Ok(new { received = true });
    }

    [HttpPost("woocommerce/order-updated")]
    public IActionResult WooCommerceOrderUpdated([FromBody] object payload)
    {
        _logger.LogInformation("WooCommerce order webhook received");
        return Ok(new { received = true });
    }
}
