import { Stagiaire } from 'src/app/model/stagiaire';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceStagiaireService } from 'src/app/services/stagiaire.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-stagiaire',
  templateUrl: './ajouter-stagiaire.component.html',
  styleUrls: ['./ajouter-stagiaire.component.scss']
})
export class AjouterStagiaireComponent implements OnInit {



  @Output()
  stgAddedEvent = new EventEmitter();

  public selectedFile;
  imgURL: any;



  @Input() stg: Stagiaire;
  stagiaire: Stagiaire = new Stagiaire();
  s: Stagiaire = new Stagiaire();
  show: boolean = false;

  listestagiaires: Observable<Stagiaire[]>;

  filieres = [{ name: 'Math', value: 'Math' }, { name: 'Physique', value: 'Physique' }, { name: 'Arabic', value: 'Arabic' }, { name: 'English', value: 'English' }];

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




  constructor(public toastr: ToastrService, private stgService: ServiceStagiaireService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }




  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }



  save() {
    this.stgService.createStagiaire(this.stagiaire)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stagiaire = new Stagiaire();
    this.router.navigate(['liste-stagiares']);



  }

  getStagiaire() {

    this.stagiaire.codeApoge = this.stg.codeApoge;
    this.stagiaire.nomPrenom = this.stg.nomPrenom;
    this.stagiaire.lieuNais = this.stg.lieuNais;

  }
  reloadData() {
    this.listestagiaires = this.stgService.getStagiaireList();


  }
  showSuccess() {
    this.toastr.success('Vous avez bien ajouté l"élément!', 'Succès');
  }

  onSubmit() {
    this.save();
    this.showSuccess();
  }


}
