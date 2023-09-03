import { Component } from '@angular/core';
import { LoanRequest } from '../../model/loan-request';
import { LoanRequestService } from '../../service/loan-request.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  loanReq!: LoanRequest[];

  constructor(private userService: LoanRequestService) {

  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.loanReq = data;
    });
  }

  handleLoanApprove(loanRequestId: any, loan: any): void {
    console.log(loanRequestId)
    this.userService.approveLoan(loanRequestId, loan).subscribe(data => {
      console.log(data);
    })
  }


}
