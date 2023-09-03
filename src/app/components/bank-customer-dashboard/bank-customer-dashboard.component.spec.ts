import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCustomerDashboardComponent } from './bank-customer-dashboard.component';

describe('BankCustomerDashboardComponent', () => {
  let component: BankCustomerDashboardComponent;
  let fixture: ComponentFixture<BankCustomerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankCustomerDashboardComponent]
    });
    fixture = TestBed.createComponent(BankCustomerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
