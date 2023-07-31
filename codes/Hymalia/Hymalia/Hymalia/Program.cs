using System.Reflection;
using Hymalia.Middlewares;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Razor;
using Navi.Library.Exceptions;
using Navi.Library.Localization;
using Navi.MongoDb;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

// Add services to the container.
var services = builder.Services;
services.AddControllersWithViews();

// Add session service
services.AddDistributedMemoryCache();
services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(120);
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
    options.Cookie.SameSite = SameSiteMode.Strict;
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

// Add cros service
services.AddCors(o => o.AddPolicy("Hymalia", c => { c.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader(); }));

// Add multiple languages
var localizationOptions = new LocalizationOptions();
configuration.GetSection("Localization").Bind(localizationOptions);
services.AddLocalization(options => options.ResourcesPath = localizationOptions.ResourcesPath);
services.AddSingleton<SharedLocalizer>();
services.AddMvc().AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix).AddDataAnnotationsLocalization(options =>
{
    var resourceType = Type.GetType(localizationOptions.SharedResourceName);
    if (resourceType == null)
        return;

    var fullName = resourceType.GetTypeInfo().Assembly.FullName;
    if (string.IsNullOrEmpty(fullName))
    {
        options.DataAnnotationLocalizerProvider = (type, factory) => factory.Create(resourceType);
        return;
    }

    var assemblyName = new AssemblyName(fullName).Name;
    if (string.IsNullOrEmpty(assemblyName))
    {
        options.DataAnnotationLocalizerProvider = (type, factory) => factory.Create(resourceType);
        return;
    }

    options.DataAnnotationLocalizerProvider = (type, factory) => factory.Create(resourceType.Name, assemblyName);
});

services.Configure<RequestLocalizationOptions>(options =>
{
    var supportedCultures = localizationOptions.GetSupportedCultures();
    options.DefaultRequestCulture = new RequestCulture(localizationOptions.GetDefaultCulture());
    options.SupportedCultures = supportedCultures;
    options.SupportedUICultures = supportedCultures;
});

// Add database service
services.Configure<MongoDbOptions>(options =>
{
    var connectionString = configuration.GetConnectionString("Hymalia");
    var array = connectionString.Split('?')[0].Split('/');
    var databaseName = array[^1];
    options.ConnectionString = connectionString;
    options.DatabaseName = databaseName;
});

services.AddSingleton<IMongoDbContext, DbContext>();

services.AddRazorPages().AddRazorRuntimeCompilation();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

//app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();

// Add session middleware
app.UseCookiePolicy();
app.UseSession();
app.UseMiddleware<DeChunkerMiddleware>();

// Add cros middleware
app.UseCors("Hymalia");

// Add multiple language middleware
var supportedCultures = localizationOptions.GetSupportedCultures();
var requestLocalizationOptions = new RequestLocalizationOptions
{
    DefaultRequestCulture = new RequestCulture(localizationOptions.GetDefaultCulture()),
    SupportedCultures = supportedCultures,
    SupportedUICultures = supportedCultures
};

requestLocalizationOptions.RequestCultureProviders.Insert(0, new Navi.Library.Localization.CustomRequestCultureProvider(requestLocalizationOptions));
app.UseRequestLocalization(requestLocalizationOptions);

app.UseMiddleware<HttpExceptionHandler>();

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "areas",
        pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"

    );
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
});

app.Run();