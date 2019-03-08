import { Component, OnInit, Input } from '@angular/core';
import { InputGeneralService } from './input-general.service';

@Component({
  selector: 'lib-inputGeneral',
  template: `
    <span [formGroup]="form">
      <input
        type="text"
        [ngStyle]="estilos"
        [formControlName]="control.key"
        [id]="control.key"
        [type]="control.type"
      />
    </span>
  `,
  styles: []
})
export class InputGeneralComponent implements OnInit {
  @Input() control;
  @Input() form;
  estilos;
  constructor(private service: InputGeneralService) {}

  ngOnInit() {
    if (this.control) {
      const { style } = this.control;
      this.estilos = style ? this.service.stringToObj(style) : {};
      console.log('this.estilos', this.estilos);
    }
  }
}
