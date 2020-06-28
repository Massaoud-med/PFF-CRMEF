import { Pipe, PipeTransform } from '@angular/core';
import { Cours } from 'src/app/model/cours';

@Pipe({
  name: 'cours'
})
export class PipeCoursPipe implements PipeTransform {


  private counter = 0;
  transform(Cour: Cours[], searchTerm: string): Cours[] {

   /* this.counter++;
    console.log('Filter pipe executed count ' + this.counter);*/

    if(!Cour || !searchTerm){

      return Cour;
    }
    return Cour.filter(f => f.formateurCours.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }

}
