using AnyPOS.Core.Services;
using Xunit;

namespace AnyPOS.Tests;

public class OfflineInvoiceCodeGeneratorTests
{
    [Fact]
    public void Generate_ShouldProduceCorrectFormat()
    {
        var date = new DateTime(2024, 1, 15);
        var code = OfflineInvoiceCodeGenerator.Generate("POS", date, 1);
        Assert.Equal("POS-20240115-000001", code);
    }

    [Fact]
    public void Generate_ShouldPadSequenceToSixDigits()
    {
        var date = new DateTime(2024, 12, 31);
        var code = OfflineInvoiceCodeGenerator.Generate("POS", date, 999999);
        Assert.Equal("POS-20241231-999999", code);
    }

    [Fact]
    public void GenerateUniqueId_ShouldContainPosIdentifier()
    {
        var id = OfflineInvoiceCodeGenerator.GenerateUniqueId("STORE01");
        Assert.StartsWith("STORE01-", id);
    }

    [Fact]
    public void GenerateUniqueId_ShouldBeUnique()
    {
        var id1 = OfflineInvoiceCodeGenerator.GenerateUniqueId("POS");
        var id2 = OfflineInvoiceCodeGenerator.GenerateUniqueId("POS");
        Assert.Matches(@"POS-\d+-\d+", id1);
        Assert.Matches(@"POS-\d+-\d+", id2);
    }
}
