import { Vacance } from './../../../model/vacance';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VacanceService } from 'src/app/services/vacance.service';

@Component({
  selector: 'app-ajouter-vacance',
  templateUrl: './ajouter-vacance.component.html',
  styleUrls: ['./ajouter-vacance.component.scss']
})
export class AjouterVacanceComponent implements OnInit {



  vacance: Vacance = new Vacance();


  vacances: Observable<Vacance[]>;



  constructor(public toastr: ToastrService, private vacanceService: VacanceService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }



  save() {
    this.vacanceService.createVacance(this.vacance)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vacance = new Vacance();
    this.router.navigate(['vacances']);


  }

  showSuccess() {
    this.toastr.success('Vous avez bien ajouté l"élément!', 'Succès');
  }

  reloadData() {
    this.vacances = this.vacanceService.getVacanceList();
  }

  onSubmit() {
    this.save();
    this.showSuccess();
  }


}
