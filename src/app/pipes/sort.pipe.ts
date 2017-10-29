import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    array.map(item => {
      item[field] ? item[field] : item[field] = '';
      return item;
    });

    array.sort((a: any, b: any) => {
      if (typeof a[field] !== 'object' || typeof b[field] !== 'object') {
        if (a[field].toLowerCase() < b[field].toLowerCase()) {
          return -1;
        } else if (a[field].toLowerCase() > b[field].toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    return array;
  }
}
