using SuperParkingLotAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuperParkingLotAPI.Data.repositories.carType
{
    public interface ICarTypeRepository
    {
        Task<IEnumerable<CarType>> GetAllCars();
        Task<CarType> GetCar(int id);
        Task<bool> InsertCar(CarType car);
        Task<bool> UpdateCar(CarType car);
        Task<bool> DeleteCar(int id);
    }
}
