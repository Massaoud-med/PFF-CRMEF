import { FormateurService } from './../../../services/formateur.service';
import { CoursService } from './../../../services/cours.service';
import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/model/cours';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/model/formateur';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ajouter-cours',
  templateUrl: './ajouter-cours.component.html',
  styleUrls: ['./ajouter-cours.component.scss']
})
export class AjouterCoursComponent implements OnInit {

  cours: Cours;
  show: boolean = false;
  codeApoge: number;

  listeCours: Observable<Cours[]>;

  cour: Cours = new Cours();

  listeFormateurs: Observable<Formateur[]>;

  // tslint:disable-next-line: max-line-length
  constructor(public toastr: ToastrService, private formateurService: FormateurService, private coursService: CoursService, private router: Router) { }

  ngOnInit() {
    this.listeFormateurs = this.formateurService.getFormateurList();
    this.reloadData();
  }

  save() {
    this.coursService.createCours(this.cour)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cour = new Cours();
    this.router.navigate(['cours']);

  }

  reloadData() {
    this.listeCours = this.coursService.getCoursList();

  }
  showSuccess() {
    this.toastr.success('Vous avez bien ajouté l"élément!', 'Succès');
  }
  onSubmit() {
    this.save();
    this.showSuccess();
  }

}
