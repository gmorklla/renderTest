import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter
} from 'rxjs/operators';
import { InputGeneralService } from './input-general.service';
import { AsyncValService } from './../../../render/src/app/asyncVal.service';

@Component({
  selector: 'lib-inputGeneral',
  template: `
    <form [formGroup]="form">
      <input
        [ngStyle]="estilos"
        [formControlName]="control.name"
        [id]="control.id"
        [type]="control.type"
      />
      <i class="far fa-envelope"></i>
      <div *ngIf="form.get(control.name).status === 'PENDING'">
        Verificando...
      </div>
      <div *ngIf="form.get(control.name).status === 'VALID'">
        😺 Campo válido!
      </div>

      <div
        *ngIf="form.get(control.name).errors && form.get(control.name).touched"
      >
        😢
        {{ form.get(control.name).errors.description || 'Campo requerido' }}
      </div>
    </form>
  `,
  styleUrls: ['./input-general.component.css']
})
export class InputGeneralComponent implements OnInit {
  @Input() control;
  @Input() form: FormGroup;
  estilos;

  constructor(
    private service: InputGeneralService,
    private callToService: AsyncValService
  ) {}

  ngOnInit() {
    if (this.control) {
      const {
        attributes: { style }
      } = this.control;
      this.estilos = style ? this.service.stringToObj(style) : {};
      this.form
        .get(this.control.name)
        .valueChanges.pipe(
          distinctUntilChanged(),
          debounceTime(1000),
          switchMap(_ => this.form.get(this.control.name).statusChanges),
          filter(val => val === 'VALID'),
          switchMap(val => this.callToService.asynCallToService())
        )
        .subscribe(val => console.log('subs valueChanges', val));
    }
  }
}
