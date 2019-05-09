import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsyncValService } from './asyncVal.service';
import { InputBase } from './input-base';
import { Observable } from 'rxjs';

@Injectable()
export class InputControlService {
  syncValidatorsMap = {
    required: Validators.required,
    min: (num: number) => Validators.min(num),
    max: (num: number) => Validators.min(num),
    minL: (num: number) => Validators.minLength(num),
    maxL: (num: number) => Validators.maxLength(num),
    email: Validators.email,
    pattern: (pattern: string | RegExp) => Validators.pattern(pattern)
  };

  asyncValidatorsMap = {
    checkEmail: email => this.asyncV.checkEmailNotTaken(email),
    validCard: card => this.asyncV.validCard(card)
  };

  constructor(private asyncV: AsyncValService) {}

  toFormGroup(inputs: InputBase<any>[]) {
    const group: any = {};

    inputs.forEach(input => {
      // Obtener validadores síncronos
      const syncValidators = this.getSyncValidators(input);
      // Obtener validadores asíncronos
      const asyncValidators = this.getAsyncValidators(input).map(fn =>
        fn.bind(this)
      );
      group[input.name] = new FormControl(
        input.attributes.value || '',
        syncValidators,
        asyncValidators
      );
    });
    return new FormGroup(group);
  }

  getSyncValidators(input) {
    return input.attributes.validations
      .filter(validator => validator.type === 'sync')
      .map(validator => {
        const fn = this.syncValidatorsMap[validator.name];
        const vToValidate = validator.val;
        return vToValidate ? fn(vToValidate) : fn;
      });
  }

  getAsyncValidators(input) {
    return input.attributes.validations
      .filter(validator => validator.type === 'async')
      .map(validator => this.asyncValidatorsMap[validator.name]);
  }

  getChangeObserver(formControl: FormControl): Observable<any> {
    return formControl.valueChanges;
  }
}
