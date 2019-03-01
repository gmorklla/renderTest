import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGeneralComponent } from './input-general.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InputGeneralComponent],
  exports: [InputGeneralComponent],
  entryComponents: [InputGeneralComponent]
})
export class InputGeneralModule {}
