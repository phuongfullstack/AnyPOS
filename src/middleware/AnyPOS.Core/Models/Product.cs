namespace AnyPOS.Core.Models;

public class Product
{
    public int Id { get; set; }
    public string LocalId { get; set; } = string.Empty;
    public string? WcProductId { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public decimal TaxRate { get; set; }
    public int Stock { get; set; }
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
