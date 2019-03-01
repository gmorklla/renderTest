import { Component, OnInit, Input } from '@angular/core';
import { InputGeneralService } from './input-general.service';

@Component({
  selector: 'lib-inputGeneral',
  template: `
    <input type="text" [ngStyle]="estilos" />
  `,
  styles: []
})
export class InputGeneralComponent implements OnInit {
  @Input() control;
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
