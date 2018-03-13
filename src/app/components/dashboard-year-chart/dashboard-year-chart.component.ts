import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-year-chart',
  templateUrl: './dashboard-year-chart.component.html',
  styleUrls: ['./dashboard-year-chart.component.css']
})
export class DashboardYearChartComponent implements OnInit {
  @Input() chartData;
  constructor() { }

  ngOnInit() {
  }

  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource = {
  	"chart": {
  		"caption": "Harry's SuperMart",
  		"subCaption": "Top 5 stores in last month by revenue",
  		"numberPrefix": "$",
  		"theme": "ocean"
  	},
  	"data": [
  	{
  		"label": "Bakersfield Central",
  		"value": "880000"
  	},
  	{
  		"label": "Garden Groove harbour",
  		"value": "730000"
  	},
  	{
  		"label": "Los Angeles Topanga",
  		"value": "590000"
  	},
  	{
  		"label": "Compton-Rancho Dom",
  		"value": "520000"
  	},
  	{
  		"label": "Daly City Serramonte",
  		"value": "330000"
  	}
  	]
  };
}
