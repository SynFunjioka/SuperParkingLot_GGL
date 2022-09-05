using Dapper;
using MySql.Data.MySqlClient;
using SuperParkingLotAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuperParkingLotAPI.Data.repositories.carData
{
    public class CarDataRepository : ICarDataRepository
    {
        private MySQLConfiguration connectionString;
        public CarDataRepository(MySQLConfiguration connectionString) => this.connectionString = connectionString;

        protected MySqlConnection dbConnection()
        {
            return new MySqlConnection(connectionString.ConnectionString);
        }
        public async Task<bool> DeleteCar(int id)
        {
            var db = dbConnection();

            var sql = @"
                    DELETE FROM `car-data`
                    WHERE id = @Id";

            var result = await db.ExecuteAsync(sql, new { Id = id });

            return result > 0;
        }

        public async Task<IEnumerable<CarData>> GetAllCars()
        {
            var db = dbConnection();

            var sql = @"
                    SELECT id, licensePlate, type FROM `car-data`";

            return await db.QueryAsync<CarData>(sql, new { });
        }

        public async Task<CarData> GetCar(int id)
        {
            var db = dbConnection();

            var sql = @"
                    SELECT id, licensePlate, type FROM `car-data` 
                    WHERE id = @Id";

            return await db.QueryFirstOrDefaultAsync<CarData>(sql, new {Id = id });
        }

        public async Task<bool> InsertCar(CarData car)
        {
            var db = dbConnection();

            var sql = @"
                    INSERT INTO `car-data` (licensePlate, type)
                    VALUES (@plate, @Type)";

            var result = await db.ExecuteAsync(sql, new { plate = car.LicensePlate, Type = car.Type });

            return result > 0;
        }

        public async Task<bool> UpdateCar(CarData car)
        {
            var db = dbConnection();

            var sql = @"
                    UPDATE `car-data` 
                    SET licensePlate = @plate, type = @Type
                    WHERE id = @Id";

            var result = await db.ExecuteAsync(sql, new { plate = car.LicensePlate, Type = car.Type, Id = car.Id });

            return result > 0;
        }
    }
}
 