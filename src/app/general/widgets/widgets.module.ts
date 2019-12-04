import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';
import { CountToModule } from 'angular-count-to';

@NgModule({
  declarations: [GeneralComponent, ChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    ChartistModule,
    CarouselModule,
    ChartsModule,
    NgbModule,
    CountToModule,
    WidgetsRoutingModule
  ]
})
export class WidgetsModule { }
