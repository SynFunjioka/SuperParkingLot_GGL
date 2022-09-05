import { Component, OnInit } from '@angular/core';
import { CheckIn, CarData, CostModel } from '@app/models/frontend';
import { CheckIn as CheckInB, CarData as CarDataB } from '@app/models/backend';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, pipe, Observable, of } from 'rxjs';
import { ParkingLotService } from '@app/services/parkingLot/parking-lot.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromDictionaries from '@app/store/parking-lot';

@Component({
  selector: 'app-current-cars',
  templateUrl: './current-cars.component.html',
  styleUrls: ['./current-cars.component.sass']
})
export class CurrentCarsComponent implements OnInit {

  checkIn: CheckInB[] = [
    // { car: { id: 1, licensePlate: "D6X-W2D", type: "Oficial" }, checkInHour: new Date().toTimeString(), checkOutHour: null, amount: null },
    // { car: { id: 2, licensePlate: "CGE-6D5", type: "Residencial" }, checkInHour: new Date().toTimeString(), checkOutHour: null, amount: null },
    // { car: { id: 3, licensePlate: "5DW-4FD", type: "No residencial" }, checkInHour: new Date().toTimeString(), checkOutHour: null, amount: null },
    // { car: { id: 4, licensePlate: "SCV-SD2", type: "Residencial" }, checkInHour: new Date().toTimeString(), checkOutHour: null, amount: null },
  ];

  checkInF!: CheckIn[];

  carData: CarDataB[] = [];
  carTypes: CostModel[] = [];

  displayedColumns: string[] = ["plate", "checkIn", "type", "actions"];

  constructor(private parkingLotService: ParkingLotService, private store: Store<fromRoot.State>) {
    setTimeout(() => { }, 500);

  }

  async ngOnInit() {
    this.store.dispatch(new fromDictionaries.Read());

    this.parkingLotService.getCars().subscribe(res => {
      console.log("Cars:", res);
      this.carData = res;
    });

    this.parkingLotService.getRecords().subscribe(res => {
      console.log("Records:", res);

      res.forEach(element => {
        let carData: CarDataB = this.carData.filter(carID => carID.id == element.fk_CarData)[0];
        let carType: CostModel = this.carTypes.filter(type => type.id == carData.type)[0];

        let newCar: CarData = {
          ...carData,
          type: carType
        }

        let checkIn: CheckIn = {
          ...element,
          car: newCar,
          checkInTime: '',
          checkOutTime: null
        }

        this.checkInF.push(checkIn);
        //this.checkInF = of
      })
      this.checkIn = res;
      console.log("Front end data:", this.checkInF)
      //console.log("Records:", this.checkIn);

    })

    this.parkingLotService.getTypes().subscribe(res => {
      console.log("Types:", res);
      this.carTypes = res;
    })
  }

}
