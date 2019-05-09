import { InputBase } from './input-base';

export class TextInput extends InputBase<string> {
  controlType = 'text';
  type: string;
  id: number;
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.id = options['id'] || 123;
  }
}
