import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Firebase Setup */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

/* FusionCharts */
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

/* App Services */
import { FirebaseService } from './providers/firebase.service';

/* External Libraries */
import * as Moment from 'moment';

/* Routes */
import { AppRoutingModule } from './app-router.module';

/* App Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentsFormComponent } from './components/payments-form/payments-form.component';
import { PaymentsDetailsComponent } from './components/payments-details/payments-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardYearChartComponent } from './components/dashboard-year-chart/dashboard-year-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentsComponent,
    DashboardComponent,
    SettingsComponent,
    LoginComponent,
    PaymentsFormComponent,
    PaymentsDetailsComponent,
    DashboardYearChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FusionChartsModule,
    AppRoutingModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
