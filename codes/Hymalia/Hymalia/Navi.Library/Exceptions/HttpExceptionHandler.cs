using Microsoft.AspNetCore.Http;

namespace Navi.Library.Exceptions;

public class HttpExceptionHandler
{
    private readonly RequestDelegate _request;

    public HttpExceptionHandler(RequestDelegate pipeline)
    {
        _request = pipeline;
    }

    public Task Invoke(HttpContext context) => this.InvokeAsync(context); 

    async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _request(context);
        }
        catch (HttpException exception)
        {
            context.Response.StatusCode = (int)exception.StatusCode;
            context.Response.Headers.Clear();
        }
    }
}