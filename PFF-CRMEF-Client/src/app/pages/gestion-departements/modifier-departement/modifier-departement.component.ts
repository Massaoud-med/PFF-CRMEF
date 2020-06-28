import { DepartementService } from './../../../services/departement.service';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/model/departement';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modifier-departement',
  templateUrl: './modifier-departement.component.html',
  styleUrls: ['./modifier-departement.component.scss']
})
export class ModifierDepartementComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(public toastr: ToastrService, private route: ActivatedRoute, private departementService: DepartementService, private router: Router) { }

  Departements: Observable<Departement[]>;
  idDep: number;
  departement: Departement;

  ngOnInit() {

    this.departement = new Departement();
    this.idDep = this.route.snapshot.params['idDep'];
    this.departementService.getDepartement(this.idDep)
      .subscribe(data => {
        console.log(data)
        this.departement = data;
      }, error => console.log(error));
  }

  reloadData() {
    this.Departements = this.departementService.getDepartementList();
  }

  editFormateur() {
    this.departementService.updatetDepartement(this.idDep, this.departement)
      .subscribe(data => console.log(data), error => console.log(error));
    this.departement = new Departement();
    this.gotoList();

  }

  showInfo() {
    this.toastr.info('This is an info toastr message!', 'Modifier');
  }


  onSubmit() {
    this.editFormateur();
    this.showInfo();
  }
  gotoList() {
    this.router.navigate(['departements']);
  }

}
