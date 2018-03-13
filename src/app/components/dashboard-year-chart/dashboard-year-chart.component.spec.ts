import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardYearChartComponent } from './dashboard-year-chart.component';

describe('DashboardYearChartComponent', () => {
  let component: DashboardYearChartComponent;
  let fixture: ComponentFixture<DashboardYearChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardYearChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardYearChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
