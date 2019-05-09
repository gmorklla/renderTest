import { InputBase } from './input-base';

export class TextInput extends InputBase<string> {
  controlType = 'text';
  type: string;
  id: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.id = options['id'] || 'input_123';
  }
}
