import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base';
import { InputControlService } from '../input-control.service';
import { TextInput } from '../input-text';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GridsterConfig } from 'angular-gridster2';

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
      key: 'email',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1,
      min: 10,
      attributes: {},
      style: ''
    })
  ];
  options: GridsterConfig;

  constructor(
    public dialogRef: MatDialogRef<VentanaDinamicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ics: InputControlService
  ) {}

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.controls);
    this.options = {
      minRows: 10,
      minItemArea: 1,
      pushItems: true,
      draggableEnabled: true,
      draggabledropOverItems: true,
      resizableEnabled: true,
      margin: 5,
      maxCols: 12,
      maxItemArea: 2500,
      maxItemCols: 100,
      maxItemRows: 100,
      maxRows: 12,
      minCols: 10,
      minItemCols: 1,
      minItemRows: 1,
      swap: false,
      fixedRowHeight: 30,
      keepFixedHeightInMobile: true,
      displayGrid: 'always',
      outerMargin: true,
      outerMarginTop: 5,
      outerMarginRight: 5,
      outerMarginBottom: 5,
      outerMarginLeft: 5,
      gridType: 'fit',
      mobileBreakpoint: 100
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
