import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormateurService } from 'src/app/services/formateur.service';
import { CoursService } from 'src/app/services/cours.service';
import { Formateur } from 'src/app/model/formateur';
import { Observable } from 'rxjs';
import { Cours } from 'src/app/model/cours';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifer-cours',
  templateUrl: './modifer-cours.component.html',
  styleUrls: ['./modifer-cours.component.scss']
})
export class ModiferCoursComponent implements OnInit {

  listeFormateurs: Observable<Formateur[]>;
  listeCours: Observable<Cours[]>;
  cour: Cours;
  idCours: number;

  // tslint:disable-next-line: max-line-length
  constructor( private route: ActivatedRoute, public toastr: ToastrService, private formateurService: FormateurService, private coursService: CoursService, private router: Router) { }

  ngOnInit() {
    this.listeFormateurs = this.formateurService.getFormateurList();

    this.cour = new Cours();
    this.idCours = this.route.snapshot.params['idCours'];
    this.coursService.getCours(this.idCours)
      .subscribe(data => {
        console.log(data)
        this.cour = data;
      }, error => console.log(error));
  }

  reloadData() {
    this.listeCours = this.coursService.getCoursList();
    this.listeFormateurs = this.formateurService.getFormateurList();
  }

  editCours() {
    this.coursService.updateCours(this.idCours, this.cour)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cour = new Cours();
    this.gotoList();

  }

  showInfo() {
    this.toastr.info('This is an info toastr message!', 'Modifier');
  }


  onSubmit() {
    this.editCours();
    this.showInfo();
  }

  gotoList() {
    this.router.navigate(['cours']);
  }

}
