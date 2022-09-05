using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuperParkingLotAPI.Data.repositories.checkIn;
using SuperParkingLotAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperParkingLotAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckInRecordController : ControllerBase
    {
        private readonly ICheckInRepository checkInRepository;

        public CheckInRecordController(ICheckInRepository checkInRepository) => this.checkInRepository = checkInRepository;

        [HttpGet]
        public async Task<IActionResult> GetAllRecords()
        {
            return Ok(await checkInRepository.GetAllRecords());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecord(int id)
        {
            return Ok(await checkInRepository.GetRecord(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateRecord([FromBody] CheckInRecord record)
        {
            if (record == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await checkInRepository.InsertRecord(record);
            return Created("created car", created);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateRecord([FromBody] CheckInRecord record)
        {
            if (record == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await checkInRepository.UpdateRecord(record);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecord(int id)
        {
            await checkInRepository.DeleteRecord(id);
            return NoContent();
        }
    }
}
