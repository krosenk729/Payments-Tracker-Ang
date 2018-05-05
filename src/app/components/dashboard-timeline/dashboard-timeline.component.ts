import {Component, AfterContentInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { DataSet, Timeline } from 'vis';

@Component({
  selector: 'app-dashboard-timeline',
  template: '<div class="graph-container"></div>',
  styleUrls: ['./dashboard-timeline.component.css']
})
export class DashboardTimelineComponent implements AfterContentInit {
  constructor() { }

  // ngAfterContentInit rather than ngOnInit 
  // This will delay the graph generation part 
  // and allow other DOM related tasks to complete
  ngAfterContentInit(){
    // create an array with events
    const items = new DataSet([
    {id: 1, content: 'item 1', start: '2013-04-20'},
    {id: 2, content: 'item 2', start: '2013-04-14'},
    {id: 3, content: 'item 3', start: '2013-04-18'},
    {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
    {id: 5, content: 'item 5', start: '2013-04-25'},
    {id: 6, content: 'item 6', start: '2013-04-27'}
    ]);

    const container = document.querySelector('.graph-container');
    const options = {};
    const timeline = new Timeline(container, items, options);
  }

}