import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCreRegistrationComponent } from './bank-cre-registration.component';

describe('BankCreRegistrationComponent', () => {
  let component: BankCreRegistrationComponent;
  let fixture: ComponentFixture<BankCreRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankCreRegistrationComponent]
    });
    fixture = TestBed.createComponent(BankCreRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
