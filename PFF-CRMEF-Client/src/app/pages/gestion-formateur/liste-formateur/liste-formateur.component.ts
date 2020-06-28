import { Formateur } from './../../../model/formateur';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceStagiaireService } from 'src/app/services/stagiaire.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import * as jsPDF from 'jspdf';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-liste-formateur',
  templateUrl: './liste-formateur.component.html',
  styleUrls: ['./liste-formateur.component.scss']
})
export class ListeFormateurComponent implements OnInit {

  popoverTitle = 'Confirmation';
  popoverMessage = 'êtes-vous sûr de vouloir supprimer';
  confirmClicked = false;
  cancelClicked = false;

  filtere = 'all';

  constructor(public toastr: ToastrService, private ServiceFormateur: FormateurService, private router: Router) { }


  formateurs: Observable<Formateur[]>;
  _searchTerm: string;
  @ViewChild('htmlData') htmlData: ElementRef;
  nbr: number;

  name = 'Angular';
  page = 1;
  pageSize = 6;

  showError() {
    this.toastr.error('Vous avez supprimé cet élément!', 'Supprimer');
  }

  ngOnInit() {
    this.reloadData();
  }

  getcount() {
    this.formateurs.subscribe(result => { this.nbr = result.length });

  }

  reloadData() {
    this.formateurs = this.ServiceFormateur.getFormateurList();
    this.getcount();
  }

  deleteFormateur(idFormateur: number) {
    this.ServiceFormateur.deleteFormateur(idFormateur)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.showError();
        },
        error => console.log(error));
  }

  editFormateur(idFormateur: number) {
    this.router.navigate(['modifier-formateur', idFormateur]);
  }

  detailsFormateur(idFormateur: number) {
    this.router.navigate(['details-formateur', idFormateur]);

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
