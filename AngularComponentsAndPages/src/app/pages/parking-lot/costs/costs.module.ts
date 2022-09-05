import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostsComponent } from './costs.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CostsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    CostsComponent
  ]
})
export class CostsModule { }
