import { Vacance } from './../../../model/vacance';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VacanceService } from 'src/app/services/vacance.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-liste-vacances',
  templateUrl: './liste-vacances.component.html',
  styleUrls: ['./liste-vacances.component.scss']
})
export class ListeVacancesComponent implements OnInit {

  popoverTitle = 'Confirmation';
  popoverMessage = 'êtes-vous sûr de vouloir supprimer';
  confirmClicked = false;
  cancelClicked = false;

  constructor(public toastr: ToastrService, private vacancesService: VacanceService, private router: Router) { }

  vacances: Observable<Vacance[]>;
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
    this.vacances.subscribe(result => { this.nbr = result.length });

  }

  reloadData() {
    this.vacances = this.vacancesService.getVacanceList();
    this.getcount();
  }

  deleteVacance(idvacance: number) {
    this.vacancesService.deleteVacance(idvacance)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.showError();
        },
        error => console.log(error));
  }

  editVacances(idVac: number) {
    this.router.navigate(['modifier-vacances', idVac]);
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
