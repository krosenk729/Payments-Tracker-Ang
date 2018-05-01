import { Component, OnInit} from '@angular/core';
declare var google:any;

@Component({
  selector: 'chart',
  template: '<div></div>'
})
export class GoogleCalendarComponent implements OnInit {
  private static googleLoaded:any;

  constructor(){
      console.log("Here is GoogleCalendarComponent")
  }

  getGoogle() {
      return google;
  }

  ngOnInit() {
    console.log('ngOnInit');
    if(!GoogleCalendarComponent.googleLoaded) {
      GoogleCalendarComponent.googleLoaded = true;
      google.charts.load('current',  {packages:["calendar"]});
    }
    google.charts.setOnLoadCallback(this.drawGraph);
  }

  drawGraph(){
    console.log("DrawGraph base class!!!!");
  }

  createCalendar(element: any ): any {
    return new google.visualization.Calendar(element);
  }

  createDataTable(arr: any[]):any {
      const dataTable = new google.visualization.DataTable();
      dataTable.addColumn({ type: 'date', id: 'Date' });
      dataTable.addColumn({ type:  'number', id: 'Payment'});
      dataTable.addRows(arr);
      return dataTable;
  }
}