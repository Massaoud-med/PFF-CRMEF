import { Vacance } from './../../../model/vacance';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vacances'
})
export class VacancePipe implements PipeTransform {

  private counter = 0;
  transform(vacances: Vacance[], searchTerm: string): Vacance[] {

   /* this.counter++;
    console.log('Filter pipe executed count ' + this.counter);*/

    if(!vacances || !searchTerm){

      return vacances;
    }
    return vacances.filter(vacance => vacance.titerVac.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }

}
