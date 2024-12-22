import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateonly',
  standalone: true,
})
export class DateonlyPipe implements PipeTransform {
  transform(value: number | string | any): string {
    if (!value) return '';
    let dateValue = moment.unix(Number(value/1000)).format('DD.MM.YY');
    if (dateValue !== 'Invalid date') {
      return dateValue;
    } else {
      return '-';
    }
  }
}
