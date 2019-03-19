export interface ControlI {
  id: number;
  name: string;
  type: string;
  attributes: { [key: string]: any };
  options?: Array<any>;
  tag: string;
}
