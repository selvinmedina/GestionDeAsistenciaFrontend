import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtractSixHours',
})
export class SubtractSixHoursPipe implements PipeTransform {
  transform(value: Date | string): Date {
    if (!value) {
      return null!;
    }

    let date = new Date(value);
    date.setHours(date.getHours() - 6);
    return date;
  }
}
