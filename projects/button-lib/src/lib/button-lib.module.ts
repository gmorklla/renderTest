import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonLibComponent } from './button-lib.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ButtonLibComponent],
  exports: [ButtonLibComponent],
  entryComponents: [ButtonLibComponent]
})
export class ButtonLibModule {}
