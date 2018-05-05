import { Component, Input, OnChanges } from '@angular/core';
import { GoogleCalendarComponent } from './google-calendar.component';
import * as Moment from 'moment';

@Component({
  selector: 'app-dashboard-chart',
  template: '<div id="chart" style="width: 500px; height: 400px;">{{dateArray[1]}}</div>',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent extends GoogleCalendarComponent implements OnChanges {
  @Input() data;
  dateArray;
  options;
  chart;

  drawGraph(){
    console.log('Dash component draw...');
  }

  paymentsToDateArrays(passed: any[]){
    // map payments into an array of arrays
    // each payment is transformed from
    // {name:..., cost:..., startDate:...}
    // to
    // [{cost:..., date:...}, {cost:..., date:...}, ...]
    return passed.map(data =>{
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
    this.dateArray = this.paymentsToDateArrays(this.data);
  }

}
