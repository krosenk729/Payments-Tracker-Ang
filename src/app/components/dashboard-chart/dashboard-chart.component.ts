import { Component } from '@angular/core';
import { GoogleCalendarComponent } from './google-calendar.component';

@Component({
  selector: 'app-dashboard-chart',
  template: '<div id="chart" style="width: 900px; height: 500px;"></div>',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent extends GoogleCalendarComponent {
  private options;
  private data;
  private chart;

  // constructor(){
  //   console.log("Here is DashboardChartComponent");
  // }

  drawGraph(){
    console.log('Dash component draw...');
    this.data = [];
  }

}
