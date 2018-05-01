import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {
 private static googleLoaded:any;

  constructor(){
      console.log("Here is GoogleChartComponent");
  }

  getGoogle() {
      return google;
  }

  ngOnInit() {
  }

}
