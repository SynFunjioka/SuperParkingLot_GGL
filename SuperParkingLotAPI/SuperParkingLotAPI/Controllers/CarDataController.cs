using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuperParkingLotAPI.Data.repositories.carData;
using SuperParkingLotAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperParkingLotAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarDataController : ControllerBase
    {
        private readonly ICarDataRepository carDataRepository;

        public CarDataController(ICarDataRepository carDataRepository) => this.carDataRepository = carDataRepository;

        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            return Ok(await carDataRepository.GetAllCars());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCar(int id)
        {
            return Ok(await carDataRepository.GetCar(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateCar([FromBody] CarData car)
        {
            if (car == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await carDataRepository.InsertCar(car);
            return Created("created car", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCar([FromBody] CarData car)
        {
            if (car == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await carDataRepository.UpdateCar(car);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            await carDataRepository.DeleteCar(id);
            return NoContent();
        }
    }
}
