namespace AnyPOS.Core.Models;

public class SyncQueue
{
    public int Id { get; set; }
    public string PosOrderId { get; set; } = string.Empty;
    public string? WcOrderId { get; set; }
    public string? InvoiceNo { get; set; }
    public SyncStatus SyncStatus { get; set; } = SyncStatus.Local;
    public string? TaxCode { get; set; }
    public string Payload { get; set; } = string.Empty;
    public int RetryCount { get; set; } = 0;
    public DateTime? NextRetryAt { get; set; }
    public string? ErrorMessage { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
