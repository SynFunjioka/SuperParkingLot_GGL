using SuperParkingLotAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuperParkingLotAPI.Data.repositories.carData
{
    public interface ICarDataRepository
    {
        Task<IEnumerable<CarData>> GetAllCars();
        Task<CarData> GetCar(int id);
        Task<bool> InsertCar(CarData car);
        Task<bool> UpdateCar(CarData car);
        Task<bool> DeleteCar(int id);
    }
}
