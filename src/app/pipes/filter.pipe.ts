import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTxt: string, fieldName: string): any[] {
    return items.filter((obj) =>
      obj[fieldName].toLowerCase().includes(searchTxt.toLowerCase())
    );
  }
}
