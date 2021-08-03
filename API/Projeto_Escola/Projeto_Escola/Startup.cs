using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Projeto_Escola
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services
                   .AddAuthentication(a =>
                   {
                       a.DefaultAuthenticateScheme = "JwtBearer";
                       a.DefaultChallengeScheme = "JwtBearer";
                   })


                   .AddJwtBearer("JwtBearer", a =>
                   {
                       a.TokenValidationParameters = new TokenValidationParameters
                       {
                           ValidateIssuer = true,

                           ValidateAudience = true,

                           ValidateLifetime = true,

                           IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("projeto_escola_autenticacao")),


                           ClockSkew = TimeSpan.FromMinutes(30),

                           ValidIssuer = "projeto_escola_autenticacao",

                           ValidAudience = "projeto_escola_autenticacao"

                       };
                   });


            services
                .AddControllers()

                .AddNewtonsoftJson(o =>
                {
                    o.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    o.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
