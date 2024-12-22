import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
  standalone: true,
})
export class ArrayToString implements PipeTransform {
  transform(arr, key: string): string {
    if (!Array.isArray(arr)) return '';
    if (key) {
      const res: string [] = [];
      arr.forEach(el => res.push(el[key]))
      return res.join(', ');
    }
    return arr.join(', ');
  }
}
