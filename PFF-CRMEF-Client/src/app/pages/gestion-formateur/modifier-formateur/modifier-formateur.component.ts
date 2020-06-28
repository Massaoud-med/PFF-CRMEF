import { Formateur } from './../../../model/formateur';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-formateur',
  templateUrl: './modifier-formateur.component.html',
  styleUrls: ['./modifier-formateur.component.scss']
})
export class ModifierFormateurComponent implements OnInit {

  listFormateur: Observable<Formateur[]>;


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


  // tslint:disable-next-line: max-line-length
  constructor(public toastr: ToastrService, private route: ActivatedRoute, private formateurService: FormateurService, private router: Router) { }


  idFormateur: number;
  formateur: Formateur;

  ngOnInit() {

    this.formateur = new Formateur();
    this.idFormateur = this.route.snapshot.params['idFormateur'];
    this.formateurService.getFormateur(this.idFormateur)
      .subscribe(data => {
        console.log(data)
        this.formateur = data;
      }, error => console.log(error));
  }

  reloadData() {
    this.listFormateur = this.formateurService.getFormateurList();
  }

  editFormateur() {
    this.formateurService.updateFormateur(this.idFormateur, this.formateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formateur = new Formateur();
    this.gotoList();

  }

  showInfo() {
    this.toastr.info('This is an info toastr message!', 'Modifier');
  }


  onSubmit() {
    this.editFormateur();
    this.showInfo();
  }
  gotoList() {
    this.router.navigate(['formateurs']);
  }
}
