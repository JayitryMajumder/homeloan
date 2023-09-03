import { Component } from '@angular/core';
import { Roles } from '../../interface/roles'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  adminData = {
    role : Roles.SUPER_ADMIN,
    description: "Login as super admin and create account for loan applicants and CRE"
  }

  loanApplicantData = {
    role : Roles.LOAN_APPLICANT,
    description: "If you are here for applying the loan then login as loan applicant"
  }

  creditAnalystData = {
    role : Roles.CREDIT_ANALYST,
    description: "If you are working with us then login here"
  }

}
