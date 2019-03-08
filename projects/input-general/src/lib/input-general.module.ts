import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputGeneralComponent } from './input-general.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [InputGeneralComponent],
  exports: [InputGeneralComponent],
  entryComponents: [InputGeneralComponent]
})
export class InputGeneralModule {}
