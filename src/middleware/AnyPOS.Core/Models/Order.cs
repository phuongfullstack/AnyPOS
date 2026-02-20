namespace AnyPOS.Core.Models;

public class Order
{
    public int Id { get; set; }
    public string PosOrderId { get; set; } = string.Empty;
    public string? WcOrderId { get; set; }
    public string? InvoiceNo { get; set; }
    public SyncStatus SyncStatus { get; set; } = SyncStatus.Local;
    public string? TaxCode { get; set; }
    public decimal SubTotal { get; set; }
    public decimal TaxRate { get; set; }
    public decimal TaxAmount { get; set; }
    public decimal Total { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? SyncedAt { get; set; }
    public List<OrderItem> Items { get; set; } = new();
}
