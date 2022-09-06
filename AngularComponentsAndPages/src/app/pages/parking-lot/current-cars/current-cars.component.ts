import { Component, OnInit } from '@angular/core';
import { CheckIn, CarData, CostModel, ControlItem } from '@app/models/frontend';
import { CheckIn as CheckInB, CarData as CarDataB } from '@app/models/backend';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, pipe, Observable, of, Subscription } from 'rxjs';
import { ParkingLotService } from '@app/services/parkingLot/parking-lot.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromDictionaries from '@app/store/parking-lot';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NotificationService } from '@app/services';
import { regex, regexErrors, markFormGroupTouched } from '@app/shared';

@Component({
  selector: 'app-current-cars',
  templateUrl: './current-cars.component.html',
  styleUrls: ['./current-cars.component.sass']
})
export class CurrentCarsComponent implements OnInit {

  form!: FormGroup;
  isInline!: boolean;
  showSpinner: boolean = false;
  regexError = regexErrors;
  typeRadios!: ControlItem[];

  newCheckIn!: boolean;
  carNotFound!: boolean;

  checkIn: CheckInB[] = [
    // { car: { id: 1, licensePlate: "D6X-W2D", type: "Oficial" }, checkInHour: new Date().toTimeString(), checkOutHour: null, amount: null },
    // { car: { id: 2, licensePlate: "CGE-6D5", type: "Residencial" }, checkInHour: new Date().toTimeString(), checkOutHour: null, amount: null },
    // { car: { id: 3, licensePlate: "5DW-4FD", type: "No residencial" }, checkInHour: new Date().toTimeString(), checkOutHour: null, amount: null },
    // { car: { id: 4, licensePlate: "SCV-SD2", type: "Residencial" }, checkInHour: new Date().toTimeString(), checkOutHour: null, amount: null },
  ];

  checkInF$: Observable<CheckIn[]> = new Observable;
  checkInF!: CheckIn[];

  carData: CarDataB[] = [];
  carTypes: CostModel[] = [];

  displayedColumns: string[] = ["plate", "checkIn", "type", "actions"];

  radio$: Observable<ControlItem[]> = new Observable;

  constructor(private parkingLotService: ParkingLotService, private store: Store<fromRoot.State>,
    private fb: FormBuilder, private notification: NotificationService
  ) {


  }

  CheckIn(): void {
    this.newCheckIn = !this.newCheckIn;
  }

  ngOnInit() {
    this.checkInF$ = this.parkingLotService.setFormat();
    this.radio$ = this.parkingLotService.setControlRadio();

    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }],
      password: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    });
  }
}
