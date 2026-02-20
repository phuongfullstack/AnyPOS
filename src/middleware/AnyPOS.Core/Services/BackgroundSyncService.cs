using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace AnyPOS.Core.Services;

public class BackgroundSyncService : BackgroundService
{
    private readonly IServiceScopeFactory _scopeFactory;
    private readonly ILogger<BackgroundSyncService> _logger;
    private static readonly TimeSpan BaseDelay = TimeSpan.FromSeconds(5);

    public BackgroundSyncService(IServiceScopeFactory scopeFactory, ILogger<BackgroundSyncService> logger)
    {
        _scopeFactory = scopeFactory;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("BackgroundSyncService started");
        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                await ProcessSyncQueueAsync(stoppingToken);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in BackgroundSyncService");
            }
            await Task.Delay(TimeSpan.FromSeconds(10), stoppingToken);
        }
    }

    private async Task ProcessSyncQueueAsync(CancellationToken cancellationToken)
    {
        using var scope = _scopeFactory.CreateScope();
        _logger.LogDebug("Processing sync queue...");
        await Task.CompletedTask;
    }

    public static TimeSpan GetBackoffDelay(int retryCount)
    {
        var seconds = Math.Min(Math.Pow(2, retryCount) * BaseDelay.TotalSeconds, 3600);
        return TimeSpan.FromSeconds(seconds);
    }
}
