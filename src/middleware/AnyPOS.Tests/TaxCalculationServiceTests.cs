using AnyPOS.Core.Services;
using Xunit;

namespace AnyPOS.Tests;

public class TaxCalculationServiceTests
{
    private readonly TaxCalculationService _service = new();

    [Theory]
    [InlineData(100000, 10, 10000)]
    [InlineData(100001, 10, 10000)]
    [InlineData(100005, 10, 10001)]
    [InlineData(50000, 8, 4000)]
    [InlineData(33333, 10, 3333)]
    [InlineData(0, 10, 0)]
    public void CalculateTax_ShouldApplyAccountingRounding(decimal amount, decimal taxRate, decimal expectedTax)
    {
        var result = _service.CalculateTax(amount, taxRate);
        Assert.Equal(expectedTax, result);
    }

    [Theory]
    [InlineData(50000, 2, 10, 110000)]
    [InlineData(25000, 3, 8, 81000)]
    public void CalculateLineTotal_ShouldReturnCorrectTotal(decimal unitPrice, int qty, decimal taxRate, decimal expected)
    {
        var result = _service.CalculateLineTotal(unitPrice, qty, taxRate);
        Assert.Equal(expected, result);
    }

    [Fact]
    public void CalculateOrderTotals_MultipleItems_ShouldSumCorrectly()
    {
        var items = new[]
        {
            (UnitPrice: 100000m, Quantity: 2, TaxRate: 10m),
            (UnitPrice: 50000m, Quantity: 1, TaxRate: 8m),
        };

        var (subTotal, taxAmount, total) = _service.CalculateOrderTotals(items);

        Assert.Equal(250000m, subTotal);
        Assert.Equal(24000m, taxAmount);
        Assert.Equal(274000m, total);
    }

    [Fact]
    public void CalculateOrderTotals_EmptyItems_ShouldReturnZero()
    {
        var (subTotal, taxAmount, total) = _service.CalculateOrderTotals(Array.Empty<(decimal, int, decimal)>());
        Assert.Equal(0m, subTotal);
        Assert.Equal(0m, taxAmount);
        Assert.Equal(0m, total);
    }
}
