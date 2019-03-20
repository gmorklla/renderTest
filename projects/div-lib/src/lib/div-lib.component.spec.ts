import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivLibComponent } from './div-lib.component';

describe('DivLibComponent', () => {
  let component: DivLibComponent;
  let fixture: ComponentFixture<DivLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
