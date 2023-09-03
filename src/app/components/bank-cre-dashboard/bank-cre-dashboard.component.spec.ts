import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCreDashboardComponent } from './bank-cre-dashboard.component';

describe('BankCreDashboardComponent', () => {
  let component: BankCreDashboardComponent;
  let fixture: ComponentFixture<BankCreDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankCreDashboardComponent]
    });
    fixture = TestBed.createComponent(BankCreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
