import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaDinamicaComponent } from './ventana-dinamica.component';

describe('VentanaDinamicaComponent', () => {
  let component: VentanaDinamicaComponent;
  let fixture: ComponentFixture<VentanaDinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanaDinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
