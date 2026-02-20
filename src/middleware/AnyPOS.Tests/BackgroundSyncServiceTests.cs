using AnyPOS.Core.Services;
using Xunit;

namespace AnyPOS.Tests;

public class BackgroundSyncServiceTests
{
    [Theory]
    [InlineData(0, 5)]
    [InlineData(1, 10)]
    [InlineData(2, 20)]
    [InlineData(3, 40)]
    [InlineData(4, 80)]
    [InlineData(10, 3600)]
    public void GetBackoffDelay_ShouldReturnExponentialDelay(int retryCount, double expectedSeconds)
    {
        var delay = BackgroundSyncService.GetBackoffDelay(retryCount);
        Assert.Equal(expectedSeconds, delay.TotalSeconds, precision: 0);
    }
}
