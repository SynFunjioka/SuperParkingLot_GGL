using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuperParkingLotAPI.Model
{
    public class CheckInRecord
    {
        public int Id { get; set; }
        public int Fk_CarData { get; set; }
        public DateTime CheckInTime { get; set; }
        public DateTime CheckOutTime { get; set; }
        public float TotalCost { get; set; }
    }
}
