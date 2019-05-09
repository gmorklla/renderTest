import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DivLibComponent } from './div-lib.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DivLibComponent],
  exports: [DivLibComponent],
  entryComponents: [DivLibComponent]
})
export class DivLibModule {}
