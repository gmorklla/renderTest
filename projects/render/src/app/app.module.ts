import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { VentanaDinamicaComponent } from './ventana-dinamica/ventana-dinamica.component';
import { InputGeneralModule } from 'projects/input-general/src/public_api';
import { ButtonLibModule } from 'projects/button-lib/src/public_api';
import { DivLibModule } from 'projects/div-lib/src/public_api';
import { ContainerDinamicoComponent } from './container-dinamico/container-dinamico.component';
import { AsyncValService } from './asyncVal.service';
import { CtrlToGridsterPipe } from './ctrl-to-gridster.pipe';
import { RangeLibModule } from 'projects/range-lib/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    VentanaDinamicaComponent,
    ContainerDinamicoComponent,
    CtrlToGridsterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    InputGeneralModule,
    ButtonLibModule,
    RangeLibModule,
    DivLibModule,
    HttpClientModule,
    GridsterModule
  ],
  providers: [AsyncValService],
  entryComponents: [VentanaDinamicaComponent, ContainerDinamicoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
