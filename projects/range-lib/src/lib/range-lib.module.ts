import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RangeLibComponent } from './range-lib.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [RangeLibComponent],
  exports: [RangeLibComponent],
  entryComponents: [RangeLibComponent]
})
export class RangeLibModule {}
