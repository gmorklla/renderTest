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
    new TextInput({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1,
      style:
        'position:absolute;width:100px;height:30px;transform:translate3d(200px,100px,0px);'
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
