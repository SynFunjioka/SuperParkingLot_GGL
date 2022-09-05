using SuperParkingLotAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuperParkingLotAPI.Data.repositories.checkIn
{
    public interface ICheckInRepository
    {
        Task<IEnumerable<CheckInRecord>> GetAllRecords();
        Task<CheckInRecord> GetRecord(int id);
        Task<bool> InsertRecord(CheckInRecord car);
        Task<bool> UpdateRecord(CheckInRecord car);
        Task<bool> DeleteRecord(int id);
    }
}
