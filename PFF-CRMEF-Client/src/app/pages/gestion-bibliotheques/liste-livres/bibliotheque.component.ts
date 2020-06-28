import { BibliothequeService } from './../../../services/bibliotheque.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Bibliotheque } from 'src/app/model/bibliotheque';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.scss']
})
export class BibliothequeComponent implements OnInit {

  constructor(private bibliothequeService: BibliothequeService, private router: Router) { }

  @ViewChild('htmlData') htmlData: ElementRef;
  bibliotheque: Observable<Bibliotheque[]>;
  _searchTerm: string;
  name = 'Angular';
  page = 1;
  pageSize = 6;
  showAdd: boolean = false;
  nbr: number;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bibliotheque = this.bibliothequeService.getBibliothequeList();
    this.getcount();
  }
  affichAdd() {
    this.showAdd = !this.showAdd;
  }


  getcount() {
    this.bibliotheque.subscribe(result => { this.nbr = result.length });
  }

  deleteBibliotheque(idBib: number) {
    this.bibliothequeService.deletetBibliotheque(idBib)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
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
