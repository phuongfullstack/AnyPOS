using Microsoft.AspNetCore.SignalR;

namespace AnyPOS.Api.Hubs;

public class PosHub : Hub
{
    public async Task SendSyncStatus(string posOrderId, string status)
    {
        await Clients.All.SendAsync("SyncStatusUpdated", posOrderId, status);
    }

    public async Task SendInvoiceIssued(string posOrderId, string invoiceNo)
    {
        await Clients.All.SendAsync("InvoiceIssued", posOrderId, invoiceNo);
    }
}
