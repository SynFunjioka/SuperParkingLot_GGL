import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { CostModel } from '@app/models/frontend';
import { CheckIn, CarData } from '@app/models/backend';


@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  //cars: CarData[];

  constructor(private httpC: HttpClient) { }

  ngOnInit() {

  }

  getCars(): Observable<CarData[]> {
    return this.httpC.get<CarData[]>("/api/CarData");
  }

  getRecords(): Observable<CheckIn[]> {
    return this.httpC.get<CheckIn[]>("/api/CheckInRecord");
  }

  getTypes(): Observable<CostModel[]> {
    return this.httpC.get<CostModel[]>("/api/CarType");
  }
}
