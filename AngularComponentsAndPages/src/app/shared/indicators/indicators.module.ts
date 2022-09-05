import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { SpinnerModule } from './spinner/spinner.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpinnerModule
  ],
  exports: [
    SpinnerModule
  ]
})
export class IndicatorsModule { }
