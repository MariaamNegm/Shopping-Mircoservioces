import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshipLocationComponent } from './addship-location.component';

describe('AddshipLocationComponent', () => {
  let component: AddshipLocationComponent;
  let fixture: ComponentFixture<AddshipLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddshipLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddshipLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
