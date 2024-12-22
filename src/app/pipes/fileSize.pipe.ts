import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
  standalone: true,
})
export class FileSize implements PipeTransform {
  transform(value: number): string {
    if (value < 0) {
      return `${value / 1024} КБ`;
    }

    
    const kb = value / 1024;
    const mb = kb / 1024;
    const gb = mb / 1024;

    if (gb >= 1) {
      return `${gb.toFixed(2)} ГБ`;
    } else if (mb >= 1) {
      return `${mb.toFixed(1)} МБ`;
    } else if (kb >=1) {
      return `${kb.toFixed(2)} КБ`;
    } else {
      return `1 КБ`;
    }
  }
}
