import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { ChartsRoutingModule } from './charts-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { GoogleComponent } from './google/google.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { NgxChartComponent } from './ngx-chart/ngx-chart.component';

@NgModule({
  declarations: [GoogleComponent, ChartjsComponent, ChartistComponent, NgxChartComponent],
  imports: [
    CommonModule,
    Ng2GoogleChartsModule,
    ChartsModule,
    ChartistModule,
    ChartsRoutingModule,
    NgxChartsModule
  ]
})
export class ChartModule { }
