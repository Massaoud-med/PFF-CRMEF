import { Stagiaire } from '../../../model/stagiaire';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stagiairefilter',

})
export class StagiaireFilterPipe implements PipeTransform {

  private counter = 0;
  transform(stagiaires: Stagiaire[], searchTerm: string): Stagiaire[] {

   this.counter++;
    console.log('Filter pipe executed count ' + this.counter);

    if(!stagiaires || !searchTerm){

      return stagiaires;
    }
    return stagiaires.filter(Stagiaire => Stagiaire.nomPrenom.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }


 /* transform(stagiaires: Stagiaire[], searchTerm: string): any {
    searchTerm = searchTerm.toLowerCase();

    if (stagiaires) {
      return stagiaires.filter((item, index) => {
        const find = item.nomPrenom.toLowerCase().indexOf(searchTerm);
        return find === -1 ? false : true;
      });
    }
  }*/

   

}
