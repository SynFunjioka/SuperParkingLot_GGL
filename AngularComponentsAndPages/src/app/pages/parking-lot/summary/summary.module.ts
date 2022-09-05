import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';

import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    SummaryComponent
  ]
})
export class SummaryModule { }
