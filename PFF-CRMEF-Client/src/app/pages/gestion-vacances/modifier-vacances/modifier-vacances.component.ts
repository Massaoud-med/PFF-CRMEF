import { Vacance } from './../../../model/vacance';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { VacanceService } from 'src/app/services/vacance.service';

@Component({
  selector: 'app-modifier-vacances',
  templateUrl: './modifier-vacances.component.html',
  styleUrls: ['./modifier-vacances.component.scss']
})
export class ModifierVacancesComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(public toastr: ToastrService, private route: ActivatedRoute, private vacanceService: VacanceService, private router: Router) { }

  vacances: Observable<Vacance[]>;
  idVac: number;
  vacance: Vacance;

  ngOnInit() {

    this.vacance = new Vacance();
    this.idVac = this.route.snapshot.params['idVac'];
    this.vacanceService.getVacance(this.idVac)
      .subscribe(data => {
        console.log(data)
        this.vacance = data;
      }, error => console.log(error));
  }

  reloadData() {
    this.vacances = this.vacanceService.getVacanceList();
  }

  editVacance() {
    this.vacanceService.updateVacance(this.idVac, this.vacance)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vacance = new Vacance();
    this.gotoList();

  }

  showInfo() {
    this.toastr.info('This is an info toastr message!', 'Modifier');
  }


  onSubmit() {
    this.editVacance();
    this.showInfo();
  }
  gotoList() {
    this.router.navigate(['vacances']);
  }
}
