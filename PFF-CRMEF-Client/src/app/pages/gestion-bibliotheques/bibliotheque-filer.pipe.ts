import { Pipe, PipeTransform } from '@angular/core';
import { Bibliotheque } from 'src/app/model/bibliotheque';

@Pipe({
  name: 'bibliothequefiler'
})
export class BibliothequeFilerPipe implements PipeTransform {

  private counter = 0;
  transform(bibliotheque: Bibliotheque[], searchTerm: string): Bibliotheque[] {

   /* this.counter++;
    console.log('Filter pipe executed count ' + this.counter);*/

    if(!bibliotheque || !searchTerm){

      return bibliotheque;
    }
    return bibliotheque.filter(biblio => biblio.titre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }

}
