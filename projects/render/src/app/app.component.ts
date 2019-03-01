import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VentanaDinamicaComponent } from './ventana-dinamica/ventana-dinamica.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'render';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(VentanaDinamicaComponent, {
      width: '500px',
      height: '500px',
      data: { name: 'this.name', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
