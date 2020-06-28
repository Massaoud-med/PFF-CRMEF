import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Stagiaire } from 'src/app/model/stagiaire';
import { ServiceStagiaireService } from 'src/app/services/stagiaire.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-stagiaire',
  templateUrl: './profil-stagiaire.component.html',
  styleUrls: ['./profil-stagiaire.component.scss']
})
export class ProfilStagiaireComponent implements OnInit {
  modalRef: BsModalRef;
  s: Stagiaire = new Stagiaire();
  codeApoge: number;
  stagiaire: Stagiaire;

  // tslint:disable-next-line: max-line-length
  constructor(private stgService: ServiceStagiaireService, private router: Router, private route: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {

    this.stagiaire = new Stagiaire();

    this.codeApoge = this.route.snapshot.params['codeApoge'];

    this.stgService.getStagiaire(10)
      .subscribe(data => {
        console.log(data)
        this.stagiaire = data;
      }, error => console.log(error));

  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ajoutReclamation() {

  }
}
