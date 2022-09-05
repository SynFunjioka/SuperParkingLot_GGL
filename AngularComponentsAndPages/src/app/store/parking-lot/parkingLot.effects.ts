import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, zip } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';

import { Dictionaries, CarData, CheckIn, CostModel } from './parkingLot.models';

import * as fromActions from './parkingLot.actions';
import { ParkingLotService } from '@app/services/parkingLot/parking-lot.service';

//import { HttpClient } from '@angular/common/http';

type Action = fromActions.All;

@Injectable()
export class DictionariesEffects {
  constructor(
    private actions: Actions,
    private parkingLotService: ParkingLotService
  ) { }

  read: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.READ),
      switchMap(() => {
        return zip(
          this.parkingLotService.getCars().pipe(),
          this.parkingLotService.getTypes().pipe(),
          this.parkingLotService.getRecords().pipe()
        ).pipe(
          map(([carData, carTypes, checkinRecords]) => {
            const dictionaries: Dictionaries = {
              carData: carData,
              checkIn: checkinRecords,
              costModel: carTypes

            };
            return new fromActions.ReadSuccess(dictionaries)
          }),
          catchError(err => of(new fromActions.ReadError(err.message)))
        )
      })
    )
  })
}
