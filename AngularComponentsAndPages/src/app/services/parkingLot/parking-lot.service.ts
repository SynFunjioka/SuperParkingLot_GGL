import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { CostModel, CarData, CheckIn } from '@app/models/frontend';
import { CheckIn as CheckInB, CarData as CarDataB } from '@app/models/backend';


@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  //Backend
  carTypes!: CostModel[];
  carData!: CarDataB[];
  checkIn!: CheckInB[];

  //Frontend
  records!: CheckIn[];

  constructor(private httpC: HttpClient) {
    this.getTypes().subscribe(res => {
      this.carTypes = res;
    });

    this.getCars().subscribe(res => {
      this.carData = res;
    });

    this.getRecords().subscribe(res => {
      this.checkIn = res;
    });

    this.setFormat().subscribe(res => {
      this.records = res;
    })
  }

  ngOnInit() {

  }

  getTypes(): Observable<CostModel[]> {
    return this.httpC.get<CostModel[]>("/api/CarType");
  }

  getCars(): Observable<CarDataB[]> {
    return this.httpC.get<CarDataB[]>("/api/CarData");
  }

  getRecords(): Observable<CheckInB[]> {
    return this.httpC.get<CheckInB[]>("/api/CheckInRecord");
  }

  setFormat(): Observable<CheckIn[]> {
    let dataFormatted: Observable<CheckIn[]> = new Observable;
    this.getRecords().pipe(map(m => {
      let arr: CheckIn[] = [];
      m.forEach(x => {
        let car: CarDataB = this.carData.filter(data => data.id == x.fk_CarData)[0];
        let type: CostModel = this.carTypes.filter(data => data.id == car.type)[0];

        let newCar: CarData = {
          ...car,
          type: type
        }

        let record: CheckIn = {
          ...x,
          car: newCar,
          checkOutTime: -62135573004000 != new Date("0001-01-01T00:00:00").getTime() && x.checkOutTime ? new Date(x.checkOutTime) : null,
        }
        arr.push(record);
      });
      return arr;
    })).subscribe(res => {
      console.log("Records:", res);
      dataFormatted = of(res);
      return of(res);
    });
    return dataFormatted;
  }
}
