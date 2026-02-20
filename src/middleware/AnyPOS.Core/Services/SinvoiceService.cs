using System.Net.Http.Json;
using System.Text.Json;
using AnyPOS.Core.Models;
using Microsoft.Extensions.Logging;

namespace AnyPOS.Core.Services;

public class SinvoiceService : ISinvoiceService
{
    private readonly HttpClient _httpClient;
    private readonly ILogger<SinvoiceService> _logger;

    private static readonly HashSet<string> LogicErrorCodes = new(StringComparer.OrdinalIgnoreCase)
    {
        "ERR_INVALID_TAX_CODE", "ERR_INVALID_MST", "ERR_TAX_RATE_MISMATCH",
        "ERR_INVALID_INVOICE_FORM", "ERR_DUPLICATE_INVOICE"
    };

    public SinvoiceService(HttpClient httpClient, ILogger<SinvoiceService> logger)
    {
        _httpClient = httpClient;
        _logger = logger;
    }

    public async Task<SinvoiceResult> IssueInvoiceAsync(Order order, CancellationToken cancellationToken = default)
    {
        try
        {
            var payload = BuildInvoicePayload(order);
            var response = await _httpClient.PostAsJsonAsync("invoices/issue", payload, cancellationToken);
            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadFromJsonAsync<JsonElement>(cancellationToken: cancellationToken);
                return new SinvoiceResult
                {
                    Success = true,
                    InvoiceNo = result.GetProperty("invoiceNo").GetString()
                };
            }
            var error = await response.Content.ReadFromJsonAsync<JsonElement>(cancellationToken: cancellationToken);
            var errorCode = error.TryGetProperty("errorCode", out var ec) ? ec.GetString() ?? "" : "";
            var errorMessage = error.TryGetProperty("message", out var em) ? em.GetString() ?? "" : "Unknown error";
            var errorType = ClassifyError(errorCode);
            _logger.LogWarning("Sinvoice error {ErrorCode} ({ErrorType}) for order {PosOrderId}: {Message}",
                errorCode, errorType, order.PosOrderId, errorMessage);
            return new SinvoiceResult { Success = false, ErrorCode = errorCode, ErrorMessage = errorMessage, ErrorType = errorType };
        }
        catch (TaskCanceledException ex) when (!cancellationToken.IsCancellationRequested)
        {
            _logger.LogWarning(ex, "Sinvoice timeout for order {PosOrderId}", order.PosOrderId);
            return new SinvoiceResult { Success = false, ErrorCode = "ERR_TIMEOUT", ErrorMessage = "Request timed out", ErrorType = SinvoiceErrorType.System };
        }
        catch (HttpRequestException ex)
        {
            _logger.LogError(ex, "Sinvoice HTTP error for order {PosOrderId}", order.PosOrderId);
            return new SinvoiceResult { Success = false, ErrorCode = "ERR_HTTP", ErrorMessage = ex.Message, ErrorType = SinvoiceErrorType.System };
        }
    }

    public SinvoiceErrorType ClassifyError(string errorCode)
    {
        return LogicErrorCodes.Contains(errorCode) ? SinvoiceErrorType.Logic : SinvoiceErrorType.System;
    }

    private static object BuildInvoicePayload(Order order) => new
    {
        posOrderId = order.PosOrderId,
        taxCode = order.TaxCode,
        invoiceDate = order.CreatedAt.ToString("yyyy-MM-dd"),
        subTotal = order.SubTotal,
        taxAmount = order.TaxAmount,
        total = order.Total,
        items = order.Items.Select(i => new { i.Name, i.Quantity, unitPrice = i.UnitPrice, taxRate = i.TaxRate, lineTotal = i.LineTotal })
    };
}
