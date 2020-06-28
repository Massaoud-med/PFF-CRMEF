import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Formateur } from './../../../model/formateur';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormateurService } from 'src/app/services/formateur.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-formateur',
  templateUrl: './profil-formateur.component.html',
  styleUrls: ['./profil-formateur.component.scss']
})
export class ProfilFormateurComponent implements OnInit {

  modalRef: BsModalRef;
  f: Formateur = new Formateur();
  show = false;
  numPro: number;
  formateur: Formateur;

  // tslint:disable-next-line: max-line-length
  constructor(private formateurService: FormateurService, private router: Router, private route: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {

    this.formateur = new Formateur();

    this.numPro = this.route.snapshot.params['codeApoge'];

    this.formateurService.getFormateur(1)
      .subscribe(data => {
        console.log(data)
        this.formateur = data;
      }, error => console.log(error));

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ajoutReclamation() {

  }

}
