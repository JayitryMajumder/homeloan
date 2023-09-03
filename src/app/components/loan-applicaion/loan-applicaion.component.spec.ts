import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicaionComponent } from './loan-applicaion.component';

describe('LoanApplicaionComponent', () => {
  let component: LoanApplicaionComponent;
  let fixture: ComponentFixture<LoanApplicaionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanApplicaionComponent]
    });
    fixture = TestBed.createComponent(LoanApplicaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
