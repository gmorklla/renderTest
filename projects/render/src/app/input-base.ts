export class InputBase<T> {
  id: number;
  name: string;
  type: string;
  attributes: { [key: string]: any };
  options?: Array<any>;
  tag: string;

  constructor(
    options: {
      id?: number;
      name?: string;
      type?: string;
      attributes?: { [key: string]: any };
      options?: Array<any>;
      tag?: string;
    } = {}
  ) {
    this.id = options.id;
    this.name = options.name;
    this.type = options.type;
    this.attributes = options.attributes;
    this.options = options.options;
    this.tag = options.tag;
  }
}
