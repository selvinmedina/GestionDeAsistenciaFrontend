import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToStatus'
})
export class BooleanToStatusPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Activo' : 'Inactivo';
  }
}
