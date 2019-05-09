import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RangeLibService } from './range-lib.service';
import { AsyncValService } from 'projects/render/src/app/asyncVal.service';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

export interface VarChange {
  id: number;
  msg: string;
}

@Component({
  selector: 'lib-rangeLib',
  template: `
    <form [formGroup]="form">
      <input
        [ngStyle]="estilos"
        [formControlName]="control.name"
        [id]="control.id"
        [type]="control.type"
        (change)="changeTest($event)"
      />
    </form>
  `,
  styles: []
})
export class RangeLibComponent implements OnInit {
  @Input() control;
  @Input() form: FormGroup;
  @Output() varChange = new EventEmitter();
  estilos;

  constructor(
    private service: RangeLibService,
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
          switchMap(val =>
            this.callToService.asynCallToService('assets/ctrlUpdate.json')
          )
        )
        .subscribe((val: VarChange[]) => {
          console.log('subs range', val);
          this.varChange.emit(val);
        });
    }
  }

  changeTest(e) {
    console.log('changeTest', e);
  }
}
