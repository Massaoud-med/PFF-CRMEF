import { Formateur } from './../../../model/formateur';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-details-formateur',
  templateUrl: './details-formateur.component.html',
  styleUrls: ['./details-formateur.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsFormateurComponent implements OnInit {

  formateur: Formateur;
  idFormateur: number;


  constructor(private formateurService: FormateurService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.formateur = new Formateur();

    this.idFormateur = this.route.snapshot.params['idFormateur'];

    this.formateurService.getFormateur(this.idFormateur)
      .subscribe(data => {
        console.log(data)
        this.formateur = data;
      }, error => console.log(error));

  }

  retour() {
    this.router.navigate(['liste-stagiares']);

  }
}
