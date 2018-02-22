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

/* App Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentsFormComponent } from './components/payments-form/payments-form.component';
import { PaymentsDetailsComponent } from './components/payments-details/payments-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';

/* App Services */
import { FirebaseService } from './providers/firebase.service';
import { AuthService } from './providers/auth.service';

import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentsComponent,
    DashboardComponent,
    SettingsComponent,
    LoginComponent,
    PaymentsFormComponent,
    PaymentsDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    FirebaseService, 
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
