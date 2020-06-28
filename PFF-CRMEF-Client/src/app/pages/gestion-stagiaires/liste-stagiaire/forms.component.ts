import { Stagiaire } from './../../../model/stagiaire';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { ServiceStagiaireService } from 'src/app/services/stagiaire.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],

})
export class FormsComponent implements OnInit {

  popoverTitle = 'Confirmation';
  popoverMessage = 'êtes-vous sûr de vouloir supprimer';
  confirmClicked = false;
  cancelClicked = false;
  show: true;
  statue = 'En cours';


  filtere = 'all';
  Corps_enseignant = 'all';
  _searchTerm: string;

  listestagiaires: Observable<Stagiaire[]>;

  constructor(public toastr: ToastrService, private stgService: ServiceStagiaireService, private router: Router) { }

  @ViewChild('htmlData') htmlData: ElementRef;
  stgs: Stagiaire = new Stagiaire();
  nbr: number;
  all: string;
  icon: string;

  // tslint:disable-next-line: max-line-length
  filieres = [{ name: 'Math', value: 'Math' }, { name: 'Physique', value: 'Physique' }, { name: 'Arabic', value: 'Arabic' }, { name: 'English', value: 'English' }];

  name = 'Angular';
  page = 1;
  pageSize = 6;

  fileName = 'Note-2020.xlsx';

  ngOnInit() {
    this.reloadData();
  }

  toggle() {

    /* if (this.show === true){
       this.statue = 'En cours';
       this.show = !this.show;} else {
       this.statue = 'stop';
       this.show = true;
     }

       console.log(this.statue);*/
  }

  showError() {
    this.toastr.error('Vous avez supprimé cet élément!', 'Supprimer');
  }

  reloadData() {
    this.listestagiaires = this.stgService.getStagiaireList();
    this.getcount();

  }
  getcount() {
    this.listestagiaires.subscribe(result => { this.nbr = result.length; });
  }

  affichAdd() {
    this.router.navigate(['ajouter-stagiares']);
  }

  deleteStagiaire(idStag: number) {
    this.stgService.deleteStagiaire(idStag)
      .subscribe(
        data => {
          this.reloadData();
          this.showError();
        },
        error => console.log(error));
  }

  editStagiaire(idStag: number) {
    this.router.navigate(['modifier-stagiaire', idStag]);
  }

  detailsStagiaire(idStag: number) {
    this.router.navigate(['info-g', idStag]);
  }

  public openPDF(): void {
    const DATA = this.htmlData.nativeElement;
    const doc = new jsPDF('p', 'pt', 'a2');
    doc.setFontSize(25);
    doc.text(520, 50, 'Liste Stagiaires');
    doc.fromHTML(DATA.innerHTML, 140, 60);
    doc.output('dataurlnewwindow');

    doc.setLineWidth(500);
  }

  public exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }



}
