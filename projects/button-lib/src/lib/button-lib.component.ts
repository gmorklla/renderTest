import { ButtonLibService } from './button-lib.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AsyncValService } from 'projects/render/src/app/asyncVal.service';

@Component({
  selector: 'lib-buttonLib',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <button [ngStyle]="estilos" [disabled]="!form.valid" type="submit">
        {{ control.attributes.value }}
      </button>
    </form>
  `,
  styles: []
})
export class ButtonLibComponent implements OnInit {
  @Input() control;
  @Input() form: FormGroup;
  @Output() varChange = new EventEmitter();
  estilos;

  constructor(
    private service: ButtonLibService,
    private callToService: AsyncValService
  ) {}

  ngOnInit() {
    if (this.control) {
      const {
        attributes: { style }
      } = this.control;
      this.estilos = style ? this.service.stringToObj(style) : {};
    }
  }

  onSubmit() {
    this.callToService
      .asynCallToService('assets/users.json')
      .subscribe(val => console.log('asyncCall on submit', val));
  }
}
