import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerAccountsComponent } from './list-customer-accounts.component';

describe('ListCustomerAccountsComponent', () => {
  let component: ListCustomerAccountsComponent;
  let fixture: ComponentFixture<ListCustomerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
