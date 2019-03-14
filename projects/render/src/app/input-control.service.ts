import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { map } from 'rxjs/operators';
import { AsyncValService } from './asyncVal.service';

import { InputBase } from './input-base';

@Injectable()
export class InputControlService {
  validatorsMap = {
    required: Validators.required,
    min: (num: number) => Validators.minLength(num)
  };

  constructor(private asyncV: AsyncValService) {}

  toFormGroup(inputs: InputBase<any>[]) {
    const group: any = {};

    inputs.forEach(input => {
      group[input.key] = input.required
        ? new FormControl(
            input.value || '',
            [this.validatorsMap.required, this.validatorsMap.min(input.min)],
            this.asyncValidation.bind(this)
          )
        : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }

  asyncValidation(control: AbstractControl) {
    return this.asyncV
      .checkEmailNotTaken(control.value)
      .pipe(map(res => (res ? null : { emailTaken: true })));
  }
}
