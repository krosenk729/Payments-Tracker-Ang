import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PaymentNewComponent } from './components/payment-new/payment-new.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';

/* Route Guard */
import { AuthGuard } from './providers/auth-guard.service';

const appRoutes: Routes = [
	{
		path: 'payments',
		component: PaymentsComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'settings',
		component: SettingsComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login', 
		component: LoginComponent
	}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
