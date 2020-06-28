import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-resultat-stagiaire',
  templateUrl: './resultat-stagiaire.component.html',
  styleUrls: ['./resultat-stagiaire.component.scss']
})
export class ResultatStagiaireComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ajoutReclamation() { }

}
