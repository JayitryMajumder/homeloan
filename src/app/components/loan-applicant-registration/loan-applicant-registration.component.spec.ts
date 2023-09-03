import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicantRegistrationComponent } from './loan-applicant-registration.component';

describe('LoanApplicantRegistrationComponent', () => {
  let component: LoanApplicantRegistrationComponent;
  let fixture: ComponentFixture<LoanApplicantRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanApplicantRegistrationComponent]
    });
    fixture = TestBed.createComponent(LoanApplicantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
