import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccConfirmationComponent } from './acc-confirmation.component';

describe('AccConfirmationComponent', () => {
  let component: AccConfirmationComponent;
  let fixture: ComponentFixture<AccConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
