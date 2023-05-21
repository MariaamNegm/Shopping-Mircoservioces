import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSellingComponent } from './create-selling.component';

describe('CreateSellingComponent', () => {
  let component: CreateSellingComponent;
  let fixture: ComponentFixture<CreateSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
