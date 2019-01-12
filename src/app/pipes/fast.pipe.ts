import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fast'
})
export class FastPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
