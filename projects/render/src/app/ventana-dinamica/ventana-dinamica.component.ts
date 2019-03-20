import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { InputBase } from '../input-base';
import { InputControlService } from '../input-control.service';
import { EventEmitterService } from '../event-emitter.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

export interface AllValidationErrors {
  control_name: string;
  error_name: string;
  error_value: any;
}

export interface VarChange {
  id: number;
  msg: string;
}

@Component({
  selector: 'app-ventana-dinamica',
  templateUrl: './ventana-dinamica.component.html',
  styleUrls: ['./ventana-dinamica.component.css'],
  providers: [InputControlService]
})
export class VentanaDinamicaComponent implements OnInit {
  form: FormGroup;
  payLoad = '';
  validationEList = [];
  controls: InputBase<any>[] = [
    new InputBase({
      id: 733,
      name: 'text_733',
      type: 'text',
      attributes: {
        style:
          'position:absolute;transform:translate3d(180px,80px,0px);width:149px;height:50px;font-family:serif;',
        icon: 'far fa-envelope',
        validations: [
          {
            name: 'required',
            type: 'sync',
            val: null
          },
          {
            name: 'email',
            type: 'sync',
            val: null
          },
          {
            name: 'checkEmail',
            type: 'async',
            val: null
          }
        ]
      },
      options: null,
      tag: 'input'
    }),
    new InputBase({
      id: 734,
      name: 'number_734',
      type: 'number',
      attributes: {
        style:
          'position:absolute;transform:translate3d(180px,140px,0px);width:149px;height:50px;',
        icon: 'far fa-credit-card',
        validations: [
          {
            name: 'required',
            type: 'sync',
            val: null
          },
          {
            name: 'pattern',
            type: 'sync',
            val: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
          }
        ]
      },
      options: null,
      tag: 'input'
    }),
    new InputBase({
      id: 736,
      name: 'range_736',
      type: 'range',
      attributes: {
        style:
          'position:absolute;transform:translate3d(180px,200px,0px);width:149px;height:50px;',
        icon: 'far fa-credit-card',
        validations: []
      },
      options: null,
      tag: 'input'
    }),
    {
      id: 735,
      name: 'button_735',
      type: 'button',
      attributes: {
        style:
          'position:absolute;transform:translate3d(180px,260px,0px);width:149px;height:50px;',
        value: 'Botón',
        validations: []
      },
      options: null,
      tag: 'input'
    },
    {
      id: 737,
      name: 'div_737',
      type: 'div',
      attributes: {
        style:
          'position:absolute;transform:translate3d(180px,320px,0px);width:149px;height:50px;',
        value: 'Un mensaje en div',
        validations: []
      },
      options: null,
      tag: 'div'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<VentanaDinamicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ics: InputControlService,
    private emitterS: EventEmitterService
  ) {}

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.controls);
    this.form.statusChanges.subscribe(val => {
      this.validationEList = this.getValidationErrors();
    });
    this.emitterS.varChange.subscribe((varChange: VarChange[]) =>
      this.updateCtrls(varChange)
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getValidationErrors() {
    const errors: AllValidationErrors[] = [];
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.controls[key];
      const controlErrors: ValidationErrors = control.errors;
      if (controlErrors !== null) {
        Object.keys(controlErrors).forEach(keyError => {
          errors.push({
            control_name: key,
            error_name: keyError,
            error_value: controlErrors[keyError]
          });
        });
      }
    });
    return errors;
  }

  updateCtrls(changes: VarChange[]) {
    const clone = JSON.parse(JSON.stringify(this.controls));
    changes.forEach(change => {
      const toUpdate = clone.filter(ctrl => change.id === ctrl.id);
      toUpdate[0].attributes.value = change.msg;
    });
    this.controls = clone;
  }
}
