import { Routes, RouterModule } from '@angular/router';

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
		path: 'home',
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

// export default appRoutes;
// https://www.c-sharpcorner.com/article/routing-in-angular-4/
// https://stackoverflow.com/questions/43113429/angular-cli-error-in-cannot-read-property-loadchildren-of-null/48205304#48205304
export default RouterModule.forRoot(appRoutes);