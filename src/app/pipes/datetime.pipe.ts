import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datetime',
  standalone: true,
})
export class DatetimePipe implements PipeTransform {
  transform(value: number | string | any): string {
    if (!value) return '';
    let dateValue = moment.unix(Number(value/1000)).format('DD.MM.YY HH:mm');
    if (dateValue !== 'Invalid date') {
      return dateValue;
    } else {
      return '-';
    }
  }
}
