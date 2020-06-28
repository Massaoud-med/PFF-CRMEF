import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import * as jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/model/departement';

@Component({
  selector: 'app-liste-departement',
  templateUrl: './liste-departement.component.html',
  styleUrls: ['./liste-departement.component.scss']
})
export class ListeDepartementComponent implements OnInit {

  popoverTitle = 'Confirmation';
  popoverMessage = 'êtes-vous sûr de vouloir supprimer';
  confirmClicked = false;
  cancelClicked = false;

  constructor(public toastr: ToastrService, private departementService: DepartementService, private router: Router) { }

  departements: Observable<Departement[]>;
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
    this.departements.subscribe(result => { this.nbr = result.length });

  }

  reloadData() {
    this.departements = this.departementService.getDepartementList();
    this.getcount();
  }

  deleteFormateur(idFormateur: number) {
    this.departementService.deletetDepartement(idFormateur)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.showError();
        },
        error => console.log(error));
  }

  editDepartement(idDep: number) {
    this.router.navigate(['modifier-departement', idDep]);
  }

  detailsDepartement(idDep: number) {
    this.router.navigate(['details-departement', idDep]);

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
