import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { VentanaDinamicaComponent } from './ventana-dinamica/ventana-dinamica.component';
import { InputGeneralModule } from 'projects/input-general/src/public_api';
import { ButtonLibModule } from 'projects/button-lib/src/public_api';
import { ContainerDinamicoComponent } from './container-dinamico/container-dinamico.component';
import { AsyncValService } from './asyncVal.service';

@NgModule({
  declarations: [
    AppComponent,
    VentanaDinamicaComponent,
    ContainerDinamicoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    InputGeneralModule,
    ButtonLibModule,
    HttpClientModule
  ],
  providers: [AsyncValService],
  entryComponents: [VentanaDinamicaComponent, ContainerDinamicoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
