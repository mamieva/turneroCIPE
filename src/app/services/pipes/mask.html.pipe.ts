import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class NumberMaskPipe implements PipeTransform {
  transform(number: string): string {
    const visibleDigits = 4;
    if (number) {
      let split = number.split("");
      if (split.length == 3 || split.length == 4) {
        split.splice(2, 0, '/');
      }
      else if (split.length >= 5) {
        split.splice(3, 0, '/');
      }
      return split.toString();
    }
  }
}