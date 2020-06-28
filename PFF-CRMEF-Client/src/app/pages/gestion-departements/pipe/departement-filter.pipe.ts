import { Pipe, PipeTransform } from '@angular/core';
import { Departement } from 'src/app/model/departement';

@Pipe({
  name: 'departementfilter'
})
export class DepartementFilterPipe implements PipeTransform {

  private counter = 0;
  transform(departements: Departement[], searchTerm: string): Departement[] {

   /* this.counter++;
    console.log('Filter pipe executed count ' + this.counter);*/

    if(!departements || !searchTerm){

      return departements;
    }
    return departements.filter(departement => departement.nomDep.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }
}
