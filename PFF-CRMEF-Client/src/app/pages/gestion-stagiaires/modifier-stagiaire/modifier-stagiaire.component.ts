import { Component, OnInit, Input } from '@angular/core';
import { ServiceStagiaireService } from 'src/app/services/stagiaire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Stagiaire } from 'src/app/model/stagiaire';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-stagiaire',
  templateUrl: './modifier-stagiaire.component.html',
  styleUrls: ['./modifier-stagiaire.component.scss']
})
export class ModifierStagiaireComponent implements OnInit {


  stagiaire: Stagiaire;
  codeApoge: number;

  listestagiaires: Observable<Stagiaire[]>;

  // tslint:disable-next-line: max-line-length
  filieres = [{ name: 'Math', value: 'Math' }, { name: 'Physique', value: 'Physique' }, { name: 'Arabic', value: 'Arabic' }, { name: 'English', value: 'English' }];

  // tslint:disable-next-line: max-line-length
  groupes = [{ name: 'G1', value: 'G1' }, { name: 'G2', value: 'G2' }, { name: 'G3', value: 'G3' }, { name: 'G4', value: 'G4' }, { name: 'G5', value: 'G5' }];



  facultes = [{ name: 'Université Mohammed VI Polytechnique-Benguerir', value: 'Université Mohammed VI Polytechnique-Benguerir' },
  { name: 'Université Abdelmalek Essaâdi -Tétouan', value: 'Université Abdelmalek Essaâdi -Tétouan' },
  { name: 'Université Al Akhawayn -Ifrane', value: 'Université Al Akhawayn -Ifrane' },
  { name: 'Université Cadi Ayyad -Marrakesh', value: 'Université Cadi Ayyad -Marrakesh' },
  { name: 'Université Chouaib Doukkali -El Jadida', value: 'Université Chouaib Doukkali -El Jadida' },
  { name: 'Université Hassan Premier -Settat', value: 'Université Hassan Premier -Settat' },
  { name: 'Université Ibn Tofail -Kenitra', value: 'Université Ibn Tofail -Kenitra' },
  { name: 'Université Ibnou Zohr -Agadir', value: 'Université Ibnou Zohr -Agadir' },
  { name: 'Université Mohamed Premier -Oujda', value: 'Université Mohamed Premier -Oujda' },
  { name: 'Université Mohammed V -Rabat', value: 'Université Mohammed V -Rabat' },
  { name: 'Université Mohammed V de  Agdal-Rabat', value: 'Université Mohammed V de  Agdal-Rabat' },
  { name: 'Université Mohammed V de Souissi-Rabat', value: 'Université Mohammed V de Souissi-Rabat' },
  { name: 'Université Moulay Ismail -Meknès', value: 'Université Moulay Ismail -Meknès' },
  { name: 'Université Sidi Mohamed Ben Abdellah -fes', value: 'Université Sidi Mohamed Ben Abdellah -fes' },
  { name: 'Université Hassan II Ain Chok -Casablanca', value: 'Université Hassan II Ain Chok -Casablanca' }];


  serieBacs = [{ name: 'Sciences de la Vie et de la Terre', value: 'Sciences de la Vie et de la Terre' },
  { name: 'Sciences Physiques et Chimiques', value: 'Sciences Physiques et Chimiques' },
  { name: 'Sciences Maths A', value: 'Sciences Maths A' },
  { name: 'Sciences Maths B', value: 'Sciences Maths B' },
  { name: 'Sciences Economiques', value: 'Sciences Economiques' },
  { name: 'Techniques de Gestion et de Comptabilité', value: 'Techniques de Gestion et de Comptabilité' },
  { name: 'Sciences agronomiques', value: 'Sciences agronomiques' },
  { name: 'Sciences et Technologies Electriques', value: 'Sciences et Technologies Electriques' },
  { name: 'Sciences et Technologies Mécaniques', value: 'Sciences et Technologies Mécaniques' },
  { name: 'Arts Appliqués', value: 'Arts Appliqués' },
  { name: 'Sciences Humaines', value: 'Sciences Humaines' },
  { name: 'Sciences de la Chariaâ', value: 'Sciences de la Chariaâ' },
  { name: 'Sciences de Langue Arabe', value: 'Sciences de Langue Arabe' }];

  academies = [{ name: 'Tanger-Tétouan-Al Hoceïma', value: 'Tanger-Tétouan-Al Hoceïma' },
  { name: 'Fès-Meknès', value: 'Fès-Meknès' },
  { name: 'Casablanca-Settat', value: 'Casablanca-Settat' },
  { name: 'Souss-Massa', value: 'Souss-Massa' },
  { name: 'Guelmim-Oued Noun', value: 'Guelmim-Oued Noun' },
  { name: 'Marrakech-Safi', value: 'Marrakech-Safi' },
  { name: 'Rabat-Salé-Kénitra', value: 'Rabat-Salé-Kénitra' },
  { name: 'Oriental', value: 'Oriental' },
  { name: 'Laâyoune-Sakia El Hamra', value: 'Laâyoune-Sakia El Hamra' },
  { name: 'Dakhla-Oued Ed Dahab', value: 'Dakhla-Oued Ed Dahab' },
  { name: 'Drâa-Tafilalet', value: 'Drâa-Tafilalet' },
  { name: 'Béni Mellal-Khénifra', value: 'Béni Mellal-Khénifra ' }];


  villes = [{ name: '	Casablanca', value: '	Casablanca' },
  { name: '	Fès', value: 'Fès' },
  { name: '	Salé', value: 'Salé' },
  { name: '	Tanger', value: 'Tanger' },
  { name: '	Marrakech', value: 'Marrakech' },
  { name: '	Meknès', value: 'Meknès' },
  { name: '	Rabat', value: 'Rabat' },
  { name: '	Oujda', value: 'Oujda' },
  { name: '	Kénitra', value: 'Kénitra' },
  { name: '	Agadir', value: 'Agadir' },
  { name: '	Tétouan', value: 'Tétouan' },
  { name: '	Témara', value: 'Témara' },
  { name: '	Safi', value: 'Safi' },
  { name: '	Mohammédia', value: 'Mohammédia' },
  { name: '	Khouribga', value: 'Khouribga' },
  { name: '	El Jadida', value: 'El Jadida' },
  { name: '	Béni Mellal', value: 'Béni Mellal' },
  { name: ' Nador', value: 'Nador' },
  { name: '	Taza', value: 'Taza' },
  { name: '	Khémisset', value: 'Khémisset' }];

  // tslint:disable-next-line: max-line-length
  constructor(public toastr: ToastrService, private route: ActivatedRoute, private stgService: ServiceStagiaireService, private router: Router) { }

  ngOnInit() {


    this.stagiaire = new Stagiaire();
    this.codeApoge = this.route.snapshot.params['codeApoge'];
    this.stgService.getStagiaire(this.codeApoge)
      .subscribe(data => {
        console.log(data)
        this.stagiaire = data;
      }, error => console.log(error));
  }

  reloadData() {
    this.listestagiaires = this.stgService.getStagiaireList();
  }

  editStagiaire() {
    this.stgService.updateStagiaire(this.codeApoge, this.stagiaire)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stagiaire = new Stagiaire();
    this.gotoList();

  }

  showInfo() {
    this.toastr.info('This is an info toastr message!', 'Modifier');
  }


  onSubmit() {
    this.editStagiaire();
    this.showInfo();
  }

  gotoList() {
    this.router.navigate(['liste-stagiares']);
  }


}
