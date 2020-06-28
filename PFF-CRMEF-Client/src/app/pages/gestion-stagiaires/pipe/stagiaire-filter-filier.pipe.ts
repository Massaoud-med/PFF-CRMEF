import { Stagiaire } from './../../../model/stagiaire';
import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';

@Pipe({
  name: 'stagiaireFilterFilier'
})
export class StagiaireFilterFilierPipe implements PipeTransform {

  transform(items: Stagiaire[], param: string): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    //  param = param.toLowerCase();

    if (param === 'all') {
      return items;
    }

    if (items) {
      return items.filter((item, index) => item.specialite === param);
    }
  }



}
