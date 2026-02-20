using AnyPOS.Core.Models;

namespace AnyPOS.Core.Services;

public interface ISinvoiceService
{
    Task<SinvoiceResult> IssueInvoiceAsync(Order order, CancellationToken cancellationToken = default);
    SinvoiceErrorType ClassifyError(string errorCode);
}

public class SinvoiceResult
{
    public bool Success { get; set; }
    public string? InvoiceNo { get; set; }
    public string? ErrorCode { get; set; }
    public string? ErrorMessage { get; set; }
    public SinvoiceErrorType ErrorType { get; set; }
}
