import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base';
import { InputControlService } from '../input-control.service';
import { TextInput } from '../input-text';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
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
  controls: InputBase<any>[] = [
    new InputBase({
      id: 733,
      name: 'text_733',
      type: 'text',
      attributes: {
        style:
          'position:absolute;transform:translate3d(241px,82px,0px);width:149px;height:55px;',
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
          'position:absolute;transform:translate3d(241px,200px,0px);width:149px;height:55px;',
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
    })
  ];

  constructor(
    public dialogRef: MatDialogRef<VentanaDinamicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ics: InputControlService
  ) {}

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.controls);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
