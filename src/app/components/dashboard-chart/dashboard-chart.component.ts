import { Component, Input, OnChanges } from '@angular/core';
import { GoogleCalendarComponent } from './google-calendar.component';
import * as Moment from 'moment';

@Component({
  selector: 'app-dashboard-chart',
  template: '<div id="chart" style="width: 900px; height: 500px;"></div>',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent extends GoogleCalendarComponent implements OnChanges {
  @Input() data;
  private dateArray;
  private options;
  private chart;

  drawGraph(){
    console.log('Dash component draw...');
  }

  paymentsToDateArrays(){
    // map payments into an array of arrays
    // each payment is transformed from
    // {name:..., cost:..., startDate:...}
    // to
    // [{cost:..., date:...}, {cost:..., date:...}, ...]

    this.dateArray = this.data.map(data =>{
      const payment = data.payment;
      const momentConv = payment.freq.replace('ily', 'ys').replace('ly', 's').toLowerCase();
      let numOccur = Math.max(0, Moment().endOf('year').diff(Moment(payment.startDate) , momentConv ));
      
      return new Array(numOccur)
          .fill(payment.startDate)
          .map((date, indx)=>{
            return {
              date: Moment(date).add(indx, momentConv).format('YYYY-MM-DD'),
              cost: payment.cost
            }
          });
    });
  }

  ngOnChanges(){
    console.log('child...', this.data ? this.data: "error");
  }

}
