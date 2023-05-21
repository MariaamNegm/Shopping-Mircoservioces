import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSellingComponent } from './list-selling.component';

describe('ListSellingComponent', () => {
  let component: ListSellingComponent;
  let fixture: ComponentFixture<ListSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
