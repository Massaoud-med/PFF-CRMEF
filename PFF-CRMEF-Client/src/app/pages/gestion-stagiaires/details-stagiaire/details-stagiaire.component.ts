import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from 'src/app/model/stagiaire';
import { ServiceStagiaireService } from 'src/app/services/stagiaire.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-stagiaire',
  templateUrl: './details-stagiaire.component.html',
  styleUrls: ['./details-stagiaire.component.scss']
})


export class DetailsStagiaireComponent implements OnInit {

  active = 1;

  @Input() stg: Stagiaire;

  s: Stagiaire = new Stagiaire();
  show: boolean = false;
  codeApoge: number;
  stagiaire: Stagiaire;

  constructor(private stgService: ServiceStagiaireService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.stagiaire = new Stagiaire();

    this.codeApoge = this.route.snapshot.params['codeApoge'];

    this.stgService.getStagiaire(this.codeApoge)
      .subscribe(data => {
        console.log(data)
        this.stagiaire = data;
      }, error => console.log(error));

  }
  retour(){
    this.router.navigate(['liste-stagiares']);

  }
  /*getStagiaire(){

    this.stagiaire.codeApoge = this.stg.codeApoge;
    this.stagiaire.nomPrenom = this.stg.nomPrenom;
    this.stagiaire.lieuNais = this.stg.lieuNais;
    this.stagiaire.dateNais = this.stg.dateNais;
    this.stagiaire.cin = this.stg.cin;
    this.stagiaire.email = this.stg.email;
    this.stagiaire.adresse = this.stg.adresse;
    this.stagiaire.tele = this.stg.tele;
    this.stagiaire.groupe = this.stg.groupe;
    this.stagiaire.filiere = this.stg.filiere;
    this.stagiaire.cne = this.stg.nomPrenom;


      save() {
    this.stgService.createStagiaire(this.stagiaire)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stagiaire = new Stagiaire();

  }

    onSubmit() {
    this.save();
  }
  }*/
}
