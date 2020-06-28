import { Pipe, PipeTransform } from '@angular/core';
import { Stagiaire } from 'src/app/model/stagiaire';

@Pipe({
  name: 'filterCorpsenseignant'
})
export class FilterCorpsEnseignantPipe implements PipeTransform {

  transform(items: Stagiaire[], param: string): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    //  param = param.toLowerCase();

    if (param === 'all') {
      return items;
    }

    if (items) {
      return items.filter((item, index) => item.corpsEducatif === param);
    }
  }


}
