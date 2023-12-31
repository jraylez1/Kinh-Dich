﻿using Microsoft.AspNetCore.Http;

namespace Navi.Library.Web
{
    public static class HttpContext
    {
        private static IHttpContextAccessor _httpContextAccessor;
        
        public static void Configure(IHttpContextAccessor httpContextAccessor)  
        {  
            _httpContextAccessor = httpContextAccessor;
        }  
        
        public static Microsoft.AspNetCore.Http.HttpContext Current => _httpContextAccessor.HttpContext;
    }
}