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
      <i class="far fa-credit-card"></i>
      <div *ngIf="form.get('email').status === 'PENDING'">
        Checking...
      </div>
      <div *ngIf="form.get('email').status === 'VALID'">
        😺 Email is available!
      </div>

      <div
        *ngIf="form.get('email').errors && form.get('email').errors.emailTaken"
      >
        😢 Oh noes, this email is already taken!
      </div>
    </span>
  `,
  styleUrls: ['./input-general.component.css']
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
