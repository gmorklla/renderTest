import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DivLibService } from './div-lib.service';

@Component({
  selector: 'lib-divLib',
  template: `
    <div [ngStyle]="estilos">
      {{ valor }}
    </div>
  `,
  styles: []
})
export class DivLibComponent implements OnInit {
  @Input() control;
  @Input() form: FormGroup;
  @Output() varChange = new EventEmitter();
  valor: string;
  estilos;

  constructor(private service: DivLibService) {}

  ngOnInit() {
    if (this.control) {
      const {
        attributes: { style, value }
      } = this.control;
      this.estilos = style ? this.service.stringToObj(style) : {};
      this.valor = value && value.trim() !== '' ? value.trim() : 'Mensaje';
    }
  }
}
