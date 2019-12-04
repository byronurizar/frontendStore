import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as chartData from '../../../shared/data/widgets/widgets.charts';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {

  constructor() { }

  public salesWidget = chartData.salesWidget;
  public projectWidget = chartData.projectWidget;
  public productWidget = chartData.productWidget;
  public WidgetBarChart1 = chartData.WidgetBarChart1;
  public WidgetBarChart2 = chartData.WidgetBarChart2;
  public liveProductChart = chartData.liveProductChart;
  public turnOverChart = chartData.turnOverChart;
  public monthlyChart = chartData.monthlyChart;
  public usesChart = chartData.usesChart;
  public financeWidget = chartData.financeWidget;
  public orderStatusWidget = chartData.orderStatusWidget;
  public skillWidget = chartData.skillWidget;


  // Doughnut Chart (Monthlt visitor chart)
  public monthlyChartLabels: string[] = ['India', 'USA', 'Canada', 'UK'];
  public monthlyChartData: number[] = [500, 600, 400, 700];
  public monthlyChartColors: any[] = [{ backgroundColor: ["#ccbbef", "#80dde9", "#68dabe", "#4099ffa3"] }];
  public monthlyChartType = 'doughnut';
  public monthlyChartLegend = true;
  public monthlyChartOptions: any = {
    animation: false,
    responsive: true,
    height: 500,
    maintainAspectRatio: false,
    legend: { position: 'right' }
  };

  // Doughnut Chart (Daily visitor chart)
  public dailyChartLabels: string[] = ['India', 'USA', 'Canada', 'UK'];
  public dailyChartData: number[] = [800, 500, 200, 300];
  public dailyChartColors: any[] = [{ backgroundColor: ["#ccbbef", "#80dde9", "#68dabe", "#4099ffa3"] }];
  public dailyChartType = 'doughnut';
  public dailyChartLegend = true;
  public dailyChartOptions: any = {
    animation: false,
    responsive: true,
    height: 500,
    maintainAspectRatio: false,
    legend: { position: 'right' }
  };


  ngOnInit() { }
}
