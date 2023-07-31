using System.Net;

namespace Navi.Library.Exceptions;

public class HttpException : Exception
{
    public HttpStatusCode StatusCode { get; set; }

    public HttpException(HttpStatusCode statusCode, string message = null) : base(message)
    {
        StatusCode = statusCode;
    }

    public HttpException(int statusCode, string message = null) : base(message)
    {
        StatusCode = (HttpStatusCode)statusCode;
    }
}