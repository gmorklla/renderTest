import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeLibComponent } from './range-lib.component';

describe('RangeLibComponent', () => {
  let component: RangeLibComponent;
  let fixture: ComponentFixture<RangeLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
