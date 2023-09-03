import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { BankCreDashboardComponent } from './components/bank-cre-dashboard/bank-cre-dashboard.component';
import { BankCustomerDashboardComponent } from './components/bank-customer-dashboard/bank-customer-dashboard.component';
import { LoanApplicaionComponent } from './components/loan-applicaion/loan-applicaion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api/v1/admin-dashboard', component: AdminDashboardComponent },
  { path: 'api/v1/bank-cre-dashboard', component: BankCreDashboardComponent },
  { path: 'api/v1/bank-customer-dashboard', component: BankCustomerDashboardComponent },
  { path: 'api/v1/loan-apply', component: LoanApplicaionComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
