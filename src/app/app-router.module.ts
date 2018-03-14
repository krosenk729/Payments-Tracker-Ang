import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

/* Modules */
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';

/* Route Guard */
import { RouteGuard } from './providers/app-guard.service';

const appRoutes: Routes = [
	{
		path: 'login', 
		component: LoginComponent
	},
	{
		path: 'home',
		component: HomeComponent,
		canLoad: [RouteGuard],
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

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	providers: [
		RouteGuard
	]
})

export class AppRoutingModule {}