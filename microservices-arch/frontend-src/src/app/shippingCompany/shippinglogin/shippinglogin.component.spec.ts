import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingloginComponent } from './shippinglogin.component';

describe('ShippingloginComponent', () => {
  let component: ShippingloginComponent;
  let fixture: ComponentFixture<ShippingloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
