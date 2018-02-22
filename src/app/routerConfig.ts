import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';

const appRoutes: Routes = [
	{
		path: 'login', 
		component: LoginComponent
	},
	{
		path: 'home/:id',
		component: HomeComponent,
		children: [
			{
				path: 'payments',
				component: PaymentsComponent
			},
			{
				path: 'settings',
				component: SettingsComponent
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: '**',
				redirectTo: 'payments'
			}
		]
	},
	{
		path: '**', 
		redirectTo: 'login'
	}
];

export default appRoutes;