import { DepartementService } from './../../../services/departement.service';
import { Departement } from './../../../model/departement';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-departement',
  templateUrl: './ajouter-departement.component.html',
  styleUrls: ['./ajouter-departement.component.scss']
})
export class AjouterDepartementComponent implements OnInit {



  departement: Departement = new Departement();

  listeDepartement: Observable<Departement[]>;



  constructor(public toastr: ToastrService, private depService: DepartementService, private router: Router) { }

  ngOnInit() {

  }



  save() {
    this.depService.createtDepartement(this.departement)
      .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['departements']);
  }

  showSuccess() {
    this.toastr.success('Vous avez bien ajouté l"élément!', 'Succès');
  }


  onSubmit() {
    this.save();
    this.showSuccess();
  }

  


}
