import { Component, Input, OnInit, OnChanges } from '@angular/core';
import * as Moment from 'moment';
declare const google;

@Component({
  selector: 'app-dashboard-chart',
  template: '<div id="chart" style="width: 500px; height: 400px;">{{dateArray[1]}}</div>',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit, OnChanges {
  @Input() data;
  @Input() events;
  dateArray;
  options;
  chart;

  ngOnChanges(){
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  doGoogleThing(){
    google.charts.load("current", {packages:["calendar"]});
    google.charts.setOnLoadCallback(this.drawChart);

  }

  drawChart(){
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'date', id: 'Date' });
    dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
    dataTable.addRows([
      [ new Date(2012, 3, 13), 37032 ],
      [ new Date(2012, 3, 14), 38024 ],
      [ new Date(2012, 3, 15), 38024 ],
      [ new Date(2012, 3, 16), 38108 ],
      [ new Date(2012, 3, 17), 38229 ],
          // Many rows omitted for brevity.
          [ new Date(2013, 9, 4), 38177 ],
          [ new Date(2013, 9, 5), 38705 ],
          [ new Date(2013, 9, 12), 38210 ],
          [ new Date(2013, 9, 13), 38029 ],
          [ new Date(2013, 9, 19), 38823 ],
          [ new Date(2013, 9, 23), 38345 ],
          [ new Date(2013, 9, 24), 38436 ],
          [ new Date(2013, 9, 30), 38447 ],
          [ new Date(2013, 9, 4), 10 ],
          [ new Date(2013, 9, 5), 3 ],
          [ new Date(2013, 9, 7), -1 ],
          [ new Date(2013, 9, 8), 2 ],
          [ new Date(2013, 9, 12), -1 ],
          [ new Date(2013, 9, 13), 1 ],
          [ new Date(2013, 9, 15), 1 ],
          [ new Date(2013, 9, 16), -4 ],
          ]);

    var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

    var options = {
      title: "Red Sox Attendance",
      height: 350,
      calendar: {
        focusedCellColor: {
          stroke: '#d3362d',
          strokeOpacity: 1,
          strokeWidth: 1,
        }
      }
    };

    chart.draw(dataTable, options);
  }

}
