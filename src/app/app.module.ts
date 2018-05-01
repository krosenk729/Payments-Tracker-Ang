import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Providers */
import { MyFireService } from './providers/myfire.service';
import { AuthService } from './providers/auth.service';

/* Routing */
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './providers/auth-guard.service';

/* Firebase Env */
import { environment } from './../environments/environment';

// /* FusionCharts */
// import * as FusionCharts from 'fusioncharts';
// import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
// import { FusionChartsModule } from 'angular4-fusioncharts';
// FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

// /* External Libraries */
// import * as Moment from 'moment';

/* Components */
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PaymentNewComponent } from './components/payment-new/payment-new.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';
import { NavigationComponent } from './components/common/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PaymentsComponent,
    PaymentDetailsComponent,
    PaymentNewComponent,
    SettingsComponent,
    DashboardChartComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    MyFireService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
