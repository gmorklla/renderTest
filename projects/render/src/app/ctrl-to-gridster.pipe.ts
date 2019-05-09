import { Pipe, PipeTransform } from '@angular/core';
export interface GridsterItemI {
  cols: number;
  rows: number;
  y: number;
  x: number;
  id: number;
}

@Pipe({
  name: 'ctrlToGridster'
})
export class CtrlToGridsterPipe implements PipeTransform {
  transform(value: any, args?: any): GridsterItemI {
    console.log('value', value);
    const gristerItem: GridsterItemI = {
      x: 2,
      y: 2,
      cols: 4,
      rows: 1,
      id: value.id
    };
    return gristerItem;
  }
}
