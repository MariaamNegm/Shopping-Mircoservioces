import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellinghomeComponent } from './sellinghome.component';

describe('SellinghomeComponent', () => {
  let component: SellinghomeComponent;
  let fixture: ComponentFixture<SellinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellinghomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
