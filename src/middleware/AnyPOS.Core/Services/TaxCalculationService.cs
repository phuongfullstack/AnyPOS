namespace AnyPOS.Core.Services;

public class TaxCalculationService : ITaxCalculationService
{
    public decimal CalculateTax(decimal amount, decimal taxRate)
    {
        var rawTax = amount * taxRate / 100;
        return Math.Round(rawTax, 0, MidpointRounding.AwayFromZero);
    }

    public decimal CalculateLineTotal(decimal unitPrice, int quantity, decimal taxRate)
    {
        var subTotal = unitPrice * quantity;
        var tax = CalculateTax(subTotal, taxRate);
        return subTotal + tax;
    }

    public (decimal SubTotal, decimal TaxAmount, decimal Total) CalculateOrderTotals(
        IEnumerable<(decimal UnitPrice, int Quantity, decimal TaxRate)> items)
    {
        decimal subTotal = 0;
        decimal taxAmount = 0;
        foreach (var item in items)
        {
            var itemSubTotal = item.UnitPrice * item.Quantity;
            subTotal += itemSubTotal;
            taxAmount += CalculateTax(itemSubTotal, item.TaxRate);
        }
        return (subTotal, taxAmount, subTotal + taxAmount);
    }
}
