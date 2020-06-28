import { Pipe, PipeTransform } from '@angular/core';
import { Formateur } from 'src/app/model/formateur';

@Pipe({
  name: 'filterfilier'
})
export class FilterFilierPipe implements PipeTransform {

  transform(items: Formateur[], param: string): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    //  param = param.toLowerCase();

    if (param === 'all') {
      return items;
    }

    if (items) {
      return items.filter((item, index) => item.specialiteDiplom === param);
    }
  }


}
