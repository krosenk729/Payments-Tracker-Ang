import { Component, Input, OnChanges } from '@angular/core';
import { GoogleCalendarComponent } from './google-calendar.component';

@Component({
  selector: 'app-dashboard-chart',
  template: '<div id="chart" style="width: 900px; height: 500px;"></div>',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent extends GoogleCalendarComponent implements OnChanges {
  @Input() data;
  private options;
  private chart;

  drawGraph(){
    console.log('Dash component draw...');
  }

  ngOnChanges(){
    console.log(this.data ? this.data: "error");
  }

}
