using AnyPOS.Core.Models;
using AnyPOS.Core.Services;
using Microsoft.Extensions.Logging.Abstractions;
using System.Net;
using Xunit;

namespace AnyPOS.Tests;

public class SinvoiceErrorClassificationTests
{
    private readonly SinvoiceService _service;

    public SinvoiceErrorClassificationTests()
    {
        var httpClient = new HttpClient(new MockHttpMessageHandler()) { BaseAddress = new Uri("http://test/") };
        _service = new SinvoiceService(httpClient, NullLogger<SinvoiceService>.Instance);
    }

    [Theory]
    [InlineData("ERR_INVALID_TAX_CODE", SinvoiceErrorType.Logic)]
    [InlineData("ERR_INVALID_MST", SinvoiceErrorType.Logic)]
    [InlineData("ERR_TAX_RATE_MISMATCH", SinvoiceErrorType.Logic)]
    [InlineData("ERR_INVALID_INVOICE_FORM", SinvoiceErrorType.Logic)]
    [InlineData("ERR_DUPLICATE_INVOICE", SinvoiceErrorType.Logic)]
    public void ClassifyError_LogicErrors_ShouldReturnLogicType(string errorCode, SinvoiceErrorType expected)
    {
        var result = _service.ClassifyError(errorCode);
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("ERR_TIMEOUT", SinvoiceErrorType.System)]
    [InlineData("ERR_SERVICE_UNAVAILABLE", SinvoiceErrorType.System)]
    [InlineData("ERR_MAINTENANCE", SinvoiceErrorType.System)]
    [InlineData("ERR_INTERNAL_SERVER", SinvoiceErrorType.System)]
    [InlineData("UNKNOWN_ERROR", SinvoiceErrorType.System)]
    public void ClassifyError_SystemErrors_ShouldReturnSystemType(string errorCode, SinvoiceErrorType expected)
    {
        var result = _service.ClassifyError(errorCode);
        Assert.Equal(expected, result);
    }
}

internal class MockHttpMessageHandler : HttpMessageHandler
{
    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        => Task.FromResult(new HttpResponseMessage(HttpStatusCode.ServiceUnavailable));
}
