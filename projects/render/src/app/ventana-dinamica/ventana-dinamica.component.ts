import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-ventana-dinamica',
  templateUrl: './ventana-dinamica.component.html',
  styleUrls: ['./ventana-dinamica.component.css']
})
export class VentanaDinamicaComponent implements OnInit {
  controls = [
    {
      style:
        'position:absolute;width:100px;height:30px;transform:translate3d(200px,100px,0px);'
    },
    {
      style:
        'position:absolute;width:100px;height:30px;transform:translate3d(200px,200px,0px);'
    },
    {
      style:
        'position:absolute;width:100px;height:30px;transform:translate3d(200px,300px,0px);'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<VentanaDinamicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
