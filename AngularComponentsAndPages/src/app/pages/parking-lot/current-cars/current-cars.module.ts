import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCarsComponent } from './current-cars.component';

import { ButtonModule, ControlsModule, } from '@app/shared';

import { MatTableModule } from '@angular/material/table';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CurrentCarsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ButtonModule,
    ControlsModule
  ],
  exports: [
    CurrentCarsComponent
  ]
})
export class CurrentCarsModule { }
