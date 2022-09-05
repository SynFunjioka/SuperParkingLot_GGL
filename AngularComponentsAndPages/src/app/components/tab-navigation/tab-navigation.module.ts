import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavigationComponent } from './tab-navigation.component';

import { MatTabsModule } from '@angular/material/tabs';

import { CurrentCarsModule, CostsModule, SummaryModule } from '@app/pages/parking-lot';




@NgModule({
  declarations: [
    TabNavigationComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,

    CurrentCarsModule,
    CostsModule,
    SummaryModule
  ],
  exports: [
    TabNavigationComponent
  ]
})
export class TabNavigationModule { }
