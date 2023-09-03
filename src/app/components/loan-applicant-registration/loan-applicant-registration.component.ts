import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-applicant-registration',
  templateUrl: './loan-applicant-registration.component.html',
  styleUrls: ['./loan-applicant-registration.component.css']
})

export class LoanApplicantRegistrationComponent {
  loanAppData = {
    first_name: '',
    last_name: '',
    salary: '',
    username: '',
    password: '',
    mobile_number: ''
  };

  confirmPassword = '';

  submitForm() {
    console.log('Form submitted:', this.loanAppData);
  }
}
