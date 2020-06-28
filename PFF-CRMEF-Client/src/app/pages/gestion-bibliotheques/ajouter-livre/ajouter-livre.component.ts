import { BibliothequeService } from './../../../services/bibliotheque.service';
import { Bibliotheque } from './../../../model/bibliotheque';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-livre',
  templateUrl: './ajouter-livre.component.html',
  styleUrls: ['./ajouter-livre.component.scss']
})
export class AjouterLivreComponent implements OnInit {


  bibliotheque: Bibliotheque = new Bibliotheque();
  s: Bibliotheque = new Bibliotheque();
  show = false;

  listeDepartement: Observable<Bibliotheque[]>;

  type = [ {name : 'journal', value : 'journal'}, {name : 'livre', value : 'livre'}];

  etat = [ {name : 'existe', value : 'existe'}, {name : 'pas existe', value : 'pas existe'}];


  constructor(private BibService: BibliothequeService, private router: Router) { }

  ngOnInit() {
    this. reloadData();
  }



  save() {
    this.BibService.createtBibliotheque(this.bibliotheque)
      .subscribe(data => console.log(data), error => console.log(error));
      this.bibliotheque = new Bibliotheque();



  }

  reloadData() {
    this.listeDepartement = this.BibService.getBibliothequeList();


  }

  onSubmit() {
    this.save();

  }


}
