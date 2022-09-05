using Dapper;
using MySql.Data.MySqlClient;
using SuperParkingLotAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuperParkingLotAPI.Data.repositories.carType
{
    public class CarTypeRepository : ICarTypeRepository
    {
        private MySQLConfiguration connectionString;
        public CarTypeRepository(MySQLConfiguration connectionString) => this.connectionString = connectionString;

        protected MySqlConnection dbConnection()
        {
            return new MySqlConnection(connectionString.ConnectionString);
        }
        public async Task<bool> DeleteCar(int id)
        {
            var db = dbConnection();

            var sql = @"
                    DELETE FROM `car-types`
                    WHERE id = @Id";

            var result = await db.ExecuteAsync(sql, new { Id = id });

            return result > 0;
        }

        public async Task<IEnumerable<CarType>> GetAllCars()
        {
            var db = dbConnection();

            var sql = @"
                    SELECT id, nameType, price FROM `car-types`";

            return await db.QueryAsync<CarType>(sql, new { });
        }

        public async Task<CarType> GetCar(int id)
        {
            var db = dbConnection();

            var sql = @"
                    SELECT  id, nameType, price FROM `car-types` 
                    WHERE id = @Id";

            return await db.QueryFirstOrDefaultAsync<CarType>(sql, new { Id = id });
        }

        public async Task<bool> InsertCar(CarType car)
        {
            var db = dbConnection();

            var sql = @"
                    INSERT INTO `car-types` (nameType, price)
                    VALUES (@NameType, @Price)";

            var result = await db.ExecuteAsync(sql, new { NameType = car.NameType, Price = car.Price });

            return result > 0;
        }

        public async Task<bool> UpdateCar(CarType car)
        {
            var db = dbConnection();

            var sql = @"
                    UPDATE `car-types` 
                    SET nameType = @NameType, price = @Price
                    WHERE id = @Id";

            var result = await db.ExecuteAsync(sql, new { NameType = car.NameType, Price = car.Price, Id = car.Id });

            return result > 0;
        }
    }
}
