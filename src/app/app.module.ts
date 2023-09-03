import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/common/log-in/log-in.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BankCustomerDashboardComponent } from './components/bank-customer-dashboard/bank-customer-dashboard.component';
import { BankCreDashboardComponent } from './components/bank-cre-dashboard/bank-cre-dashboard.component';
import { LoginCardComponent } from './components/common/login-card/login-card.component';
import { HomeComponent } from './components/home/home.component';
import { BankCreRegistrationComponent } from './components/bank-cre-registration/bank-cre-registration.component';
import { LoanApplicantRegistrationComponent } from './components/loan-applicant-registration/loan-applicant-registration.component';
import { LoanApplicaionComponent } from './components/loan-applicaion/loan-applicaion.component';
import { LoanRequestService } from './service/loan-request.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AdminDashboardComponent,
    BankCustomerDashboardComponent,
    BankCreDashboardComponent,
    LoginCardComponent,
    HomeComponent,
    BankCreRegistrationComponent,
    LoanApplicantRegistrationComponent,
    LoanApplicaionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoanRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
