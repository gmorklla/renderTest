import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { VentanaDinamicaComponent } from './ventana-dinamica/ventana-dinamica.component';
import { InputGeneralModule } from 'projects/input-general/src/public_api';
import { ContainerDinamicoComponent } from './container-dinamico/container-dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    VentanaDinamicaComponent,
    ContainerDinamicoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    InputGeneralModule
  ],
  providers: [],
  entryComponents: [VentanaDinamicaComponent, ContainerDinamicoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
