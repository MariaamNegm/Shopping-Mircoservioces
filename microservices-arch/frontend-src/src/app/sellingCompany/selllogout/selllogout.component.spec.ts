import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelllogoutComponent } from './selllogout.component';

describe('SelllogoutComponent', () => {
  let component: SelllogoutComponent;
  let fixture: ComponentFixture<SelllogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelllogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelllogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
