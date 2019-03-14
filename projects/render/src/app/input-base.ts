export class InputBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  min: number;
  controlType: string;
  style: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      min?: number;
      controlType?: string;
      style?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.min = options.min === undefined ? 5 : options.min;
    this.controlType = options.controlType || '';
    this.style = options.style;
  }
}
