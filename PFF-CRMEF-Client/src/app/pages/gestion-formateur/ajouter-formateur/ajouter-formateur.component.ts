import { FormateurService } from './../../../services/formateur.service';
import { Formateur } from './../../../model/formateur';
import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/model/stagiaire';
import { ServiceStagiaireService } from 'src/app/services/stagiaire.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.scss']
})
export class AjouterFormateurComponent implements OnInit {

  formateur: Formateur = new Formateur();

  listeFormateurs: Observable<Formateur[]>;

  filieres = [{ name: 'Math', value: 'Math' }, { name: 'Physique', value: 'Physique' }, { name: 'arabic', value: 'arabic' }, { name: 'english', value: 'english' }];


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

  constructor(public toastr: ToastrService, private serviceFormateur: FormateurService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  saveF() {
    this.serviceFormateur.createFormateur(this.formateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formateur = new Formateur();
    this.router.navigate(['formateurs']);

  }
  showSuccess() {
    this.toastr.success('Vous avez bien ajouté l"élément!', 'Succès');
  }

  reloadData() {
    this.listeFormateurs = this.serviceFormateur.getFormateurList();
  }


  onSubmitF() {
    this.saveF();
    this.showSuccess();
  }

}
