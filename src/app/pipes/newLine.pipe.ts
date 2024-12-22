import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newline',
  standalone: true
})
export class NewlinePipe implements PipeTransform {
  transform(text: string, length: number=20): string {
    return text.length > length ? text.substring(0, length) + '...' : text;
  }
}