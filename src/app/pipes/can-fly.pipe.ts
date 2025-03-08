import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFyPipe implements PipeTransform {
  transform(value: boolean): 'Can fly' | 'Can not fly' {
    return value ? 'Can fly' : 'Can not fly';
  }
}
