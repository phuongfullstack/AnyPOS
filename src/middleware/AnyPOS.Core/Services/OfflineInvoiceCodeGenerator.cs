namespace AnyPOS.Core.Services;

public static class OfflineInvoiceCodeGenerator
{
    // Generates a temporary invoice code using the registered identifier range
    // Format: {Prefix}-{Date}-{Sequence} e.g. "POS-20240115-000001"
    public static string Generate(string prefix, DateTime date, int sequence)
    {
        return $"{prefix}-{date:yyyyMMdd}-{sequence:D6}";
    }

    // Generates a globally unique temporary ID using timestamp + random for offline use
    public static string GenerateUniqueId(string posIdentifier)
    {
        var timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        var random = Random.Shared.Next(1000, 9999);
        return $"{posIdentifier}-{timestamp}-{random}";
    }
}
