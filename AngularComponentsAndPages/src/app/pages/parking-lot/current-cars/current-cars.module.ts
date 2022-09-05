import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCarsComponent } from './current-cars.component';

import { ButtonModule } from '@app/shared';

import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    CurrentCarsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ButtonModule
  ],
  exports: [
    CurrentCarsComponent
  ]
})
export class CurrentCarsModule { }
