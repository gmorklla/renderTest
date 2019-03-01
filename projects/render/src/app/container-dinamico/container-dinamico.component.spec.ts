import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDinamicoComponent } from './container-dinamico.component';

describe('ContainerDinamicoComponent', () => {
  let component: ContainerDinamicoComponent;
  let fixture: ComponentFixture<ContainerDinamicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerDinamicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
