import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCarsComponent } from './current-cars.component';

describe('CurrentCarsComponent', () => {
  let component: CurrentCarsComponent;
  let fixture: ComponentFixture<CurrentCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
