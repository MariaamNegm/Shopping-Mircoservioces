import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingloginComponent } from './sellinglogin.component';

describe('SellingloginComponent', () => {
  let component: SellingloginComponent;
  let fixture: ComponentFixture<SellingloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
