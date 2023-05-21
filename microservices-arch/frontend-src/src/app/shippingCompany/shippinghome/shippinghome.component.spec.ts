import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippinghomeComponent } from './shippinghome.component';

describe('ShippinghomeComponent', () => {
  let component: ShippinghomeComponent;
  let fixture: ComponentFixture<ShippinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippinghomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
