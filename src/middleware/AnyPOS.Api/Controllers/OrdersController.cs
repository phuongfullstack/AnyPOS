using AnyPOS.Core.Models;
using AnyPOS.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace AnyPOS.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly ITaxCalculationService _taxService;
    private readonly IWooCommerceService _wcService;
    private readonly ISinvoiceService _sinvoiceService;
    private readonly ILogger<OrdersController> _logger;

    public OrdersController(
        ITaxCalculationService taxService,
        IWooCommerceService wcService,
        ISinvoiceService sinvoiceService,
        ILogger<OrdersController> logger)
    {
        _taxService = taxService;
        _wcService = wcService;
        _sinvoiceService = sinvoiceService;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> CreateOrder([FromBody] Order order, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(order.PosOrderId))
            return BadRequest(new { error = "PosOrderId is required" });

        var items = order.Items.Select(i => (i.UnitPrice, i.Quantity, i.TaxRate));
        var (subTotal, taxAmount, total) = _taxService.CalculateOrderTotals(items);
        order.SubTotal = subTotal;
        order.TaxAmount = taxAmount;
        order.Total = total;

        _logger.LogInformation("Processing order {PosOrderId}: SubTotal={SubTotal} Tax={Tax} Total={Total}",
            order.PosOrderId, subTotal, taxAmount, total);

        var wcOrderId = await _wcService.CreateOrderAsync(order, cancellationToken);
        if (wcOrderId != null)
        {
            order.WcOrderId = wcOrderId;
            order.SyncStatus = SyncStatus.Syncing;
        }

        var invoiceResult = await _sinvoiceService.IssueInvoiceAsync(order, cancellationToken);
        if (invoiceResult.Success)
        {
            order.InvoiceNo = invoiceResult.InvoiceNo;
            order.SyncStatus = SyncStatus.Done;
            order.SyncedAt = DateTime.UtcNow;
        }
        else if (invoiceResult.ErrorType == SinvoiceErrorType.Logic)
        {
            return UnprocessableEntity(new { error = invoiceResult.ErrorMessage, errorCode = invoiceResult.ErrorCode, requiresCorrection = true });
        }
        else
        {
            order.SyncStatus = SyncStatus.Error;
        }

        return Ok(order);
    }

    [HttpGet("{posOrderId}")]
    public IActionResult GetOrder(string posOrderId)
    {
        return Ok(new { posOrderId, message = "Order lookup not yet connected to database" });
    }
}
