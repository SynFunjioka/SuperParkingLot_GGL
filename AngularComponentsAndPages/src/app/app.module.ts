import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotificationModule } from './services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { environment } from 'environments/environment';

import { HttpClientModule } from '@angular/common/http';

import { TabNavigationModule } from './components/tab-navigation/tab-navigation.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [];

import { reducers, effect } from './store';
import { ParkingLotService } from './services/parkingLot/parking-lot.service';
//This is used for Date range (APP_DATE_FORMATS)
const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
  },
  display: {
    dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    TabNavigationModule,

    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot(effect),
    StoreDevTools,

    NotificationModule.forRoot(),
    //this is used for date range
  ],
  providers: [
    ParkingLotService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, //this is used for date range component,
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS } //this is used for date range component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
