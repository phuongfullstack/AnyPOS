namespace AnyPOS.Core.Services;

public interface ITaxCalculationService
{
    decimal CalculateTax(decimal amount, decimal taxRate);
    decimal CalculateLineTotal(decimal unitPrice, int quantity, decimal taxRate);
    (decimal SubTotal, decimal TaxAmount, decimal Total) CalculateOrderTotals(
        IEnumerable<(decimal UnitPrice, int Quantity, decimal TaxRate)> items);
}
