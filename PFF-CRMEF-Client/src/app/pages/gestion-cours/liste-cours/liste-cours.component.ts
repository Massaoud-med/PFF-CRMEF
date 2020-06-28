import { CoursService } from './../../../services/cours.service';
import { Cours } from './../../../model/cours';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListeCoursComponent implements OnInit {

  constructor(public toastr: ToastrService, private coursService: CoursService, private router: Router) { }

  @ViewChild('htmlData') htmlData: ElementRef;
  cours: Observable<Cours[]>;
  _searchTerm: string;
  name = 'Angular';
  page = 1;
  pageSize = 6;


  popoverTitle = 'Confirmation';
  popoverMessage = 'êtes-vous sûr de vouloir supprimer';
  confirmClicked = false;
  cancelClicked = false;

  nbr: number;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.cours = this.coursService.getCoursList();
    this.getcount();
  }

  getcount() {
    this.cours.subscribe(result => { this.nbr = result.length });
  }

  affichAdd() {
    this.router.navigate(['ajouter-cours']);
  }
  showError() {
    this.toastr.error('Vous avez supprimé cet élément!', 'Supprimer');
  }

  deleteCours(idCours: number) {
    this.coursService.deleteCours(idCours)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  editeCours(idCours: number) {
    this.router.navigate(['modifier-cours', idCours]);
  }

  public openPDF(): void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p', 'pt', 'a2');
    doc.setFontSize(25);
    doc.text(520, 50, 'Liste Formateurs');
    doc.fromHTML(DATA.innerHTML, 140, 60);
    doc.output('dataurlnewwindow');

    doc.setLineWidth(500);
  }


}
