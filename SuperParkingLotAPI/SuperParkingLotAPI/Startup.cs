using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using SuperParkingLotAPI.Data;
using SuperParkingLotAPI.Data.repositories;
using SuperParkingLotAPI.Data.repositories.carData;
using SuperParkingLotAPI.Data.repositories.carType;
using SuperParkingLotAPI.Data.repositories.checkIn;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperParkingLotAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var mySQLConnectionConfig = new MySQLConfiguration(Configuration.GetConnectionString("MySQLConnection"));
            services.AddSingleton(mySQLConnectionConfig);

            services.AddScoped<ICarDataRepository, CarDataRepository>();
            services.AddScoped<ICheckInRepository, CheckInRepository>();
            services.AddScoped<ICarTypeRepository, CarTypeRepository>();

            services.AddControllers();
            services.AddCors();
            //services.AddMvc().SetCompatibilityVersion()
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SuperParkingLotAPI", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SuperParkingLotAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseCors(options =>
            {
                options.WithOrigins(new string[] { "http://localhost:5201" }).AllowAnyOrigin();
            });
        }
    }
}
