import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    console.log(value);
    console.log(field);
    if (!items) {
        return [];
    }
    if (!field || !value) {
        return items;
    }

    
    return items.filter(items =>
        items[field].toLowerCase().includes(value.toLowerCase())
    );
}

}
