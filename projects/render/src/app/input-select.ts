import { InputBase } from './input-base';

export class SelectInput extends InputBase<string> {
  controlType = 'combo';
  options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
