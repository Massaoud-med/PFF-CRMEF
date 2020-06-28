import { Formateur } from '../../../model/formateur';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateurfilter'
})
export class FormateurFilterPipe implements PipeTransform {

  private counter = 0;
  transform(formateur: Formateur[], searchTerm: string): Formateur[] {

   /* this.counter++;
    console.log('Filter pipe executed count ' + this.counter);*/

    if(!formateur || !searchTerm){

      return formateur;
    }
    return formateur.filter(f => f.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }

}
