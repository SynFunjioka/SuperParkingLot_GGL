using Dapper;
using MySql.Data.MySqlClient;
using SuperParkingLotAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuperParkingLotAPI.Data.repositories.checkIn
{
    public class CheckInRepository : ICheckInRepository
    {
        private MySQLConfiguration connectionString;
        public CheckInRepository(MySQLConfiguration connectionString) => this.connectionString = connectionString;

        protected MySqlConnection dbConnection()
        {
            return new MySqlConnection(connectionString.ConnectionString);
        }
        public async Task<bool> DeleteRecord(int id)
        {
            var db = dbConnection();

            var sql = @"
                    DELETE FROM `checkin-records`
                    WHERE id = @Id";

            var result = await db.ExecuteAsync(sql, new { Id = id });

            return result > 0;
        }

        public async Task<IEnumerable<CheckInRecord>> GetAllRecords()
        {
            var db = dbConnection();

            var sql = @"
                    SELECT id, fk_CarData, checkInTime, checkOutTime, totalCost FROM `checkin-records`";

            return await db.QueryAsync<CheckInRecord>(sql, new { });
        }

        public async Task<CheckInRecord> GetRecord(int id)
        {
            var db = dbConnection();

            var sql = @"
                    SELECT id, fk_CarData, checkInTime, checkOutTime, totalCost FROM `checkin-records`
                    WHERE id = @Id";

            return await db.QueryFirstOrDefaultAsync<CheckInRecord>(sql, new { Id = id });
        }

        public async Task<bool> InsertRecord(CheckInRecord record)
        {
            var db = dbConnection();

            var sql = @"
                    INSERT INTO `checkin-records` (fk_CarData, checkInTime, checkOutTime, totalCost)
                    VALUES (@Fk_CarData, @CheckInTime, @CheckOutTime, @TotalCost)";

            var result = await db.ExecuteAsync(sql, new { 
                Fk_CarData = record.Fk_CarData, 
                CheckInTime = record.CheckInTime,
                CheckOutTime = record.CheckOutTime,
                TotalCost = record.TotalCost
            });

            return result > 0;
        }

        public async Task<bool> UpdateRecord(CheckInRecord record)
        {
            var db = dbConnection();

            var sql = @"
                    UPDATE `checkin-records` 
                    SET checkInTime = @CheckInTime, checkOutTime = @CheckOutTime, totalCost = @TotalCost
                    WHERE id = @Id";

            var result = await db.ExecuteAsync(sql, new {
                CheckInTime = record.CheckInTime,
                CheckOutTime = record.CheckOutTime,
                TotalCost = record.TotalCost,
                Id = record.Id
            });

            return result > 0;
        }
    }
}
