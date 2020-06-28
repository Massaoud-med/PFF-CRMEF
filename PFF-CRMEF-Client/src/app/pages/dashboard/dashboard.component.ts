import { CoursService } from './../../services/cours.service';
import { Cours } from 'src/app/model/cours';
import { Formateur } from './../../model/formateur';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';
import { Stagiaire } from 'src/app/model/stagiaire';
import { ServiceStagiaireService } from 'src/app/services/stagiaire.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { Bibliotheque } from 'src/app/model/bibliotheque';
import { BibliothequeService } from 'src/app/services/bibliotheque.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  nbrS: number;
  nbrF: number;
  nbrL: number;
  nbrR: number;
  m_s = 0;
  f_s = 0;
  m_f = 0;
  f_f = 0;
  listestagiaires: Observable<Stagiaire[]>;
  listeFormateurs: Observable<Formateur[]>;
  listeLivre: Observable<Bibliotheque[]>;
  listeCours: Observable<Cours[]>;
  data: any;
  // tslint:disable-next-line: max-line-length
  constructor(private coursService: CoursService, private biblioServive: BibliothequeService, private stgService: ServiceStagiaireService, private formateurService: FormateurService) {

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }


  chart1 = {
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Premium',
        data: [50, 80, 60, 120, 80, 100, 60],
        backgroundColor: 'transparent',
        borderColor: '#5b6582',
        borderWidth: 2
      },
      {
        label: 'Free',
        data: [100, 60, 80, 50, 140, 60, 100],
        backgroundColor: 'transparent',
        borderColor: '#36a2eb',
        borderWidth: 2
      }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgba(0,0,0,.6)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 8,
            padding: 10
          }
        }]
      },
      responsive: true,
      legend: {
        position: 'bottom',
        display: false
      },
    }
  };
  chart2 = {
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Premium',
        data: [50, 80, 60, 120, 80, 100, 60],
        backgroundColor: '#5b6582',
        borderColor: '#5b6582',
        borderWidth: 2
      },
      {
        label: 'Free',
        data: [100, 60, 80, 50, 140, 60, 100],
        backgroundColor: '#36a2eb',
        borderColor: '#36a2eb',
        borderWidth: 2
      }
      ]
    },
    options: {
      barValueSpacing: 1,
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgba(0,0,0,.6)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 8,
            padding: 10
          }
        }],
        xAxes: [{
          barPercentage: 0.4
        }]
      },
      responsive: true,
      legend: {
        position: 'bottom',
        display: false
      },
    }
  };


  getSexeS(): void {
    this.listestagiaires.subscribe(
      data => {
        data.forEach(stg => {
          if (stg.sexe === 'Masculin') { this.m_s = this.m_s + 1; }
          if (stg.sexe === 'Feminin') { this.f_s = this.f_s + 1; }
          console.log(this.m_s);
          console.log(this.f_s);

        })
      },
      error => console.log(error));
  }

  getSexeF(): void {
    this.listeFormateurs.subscribe(
      data => {
        data.forEach(stg => {
          if (stg.sexe === 'Masculin') { this.m_f = this.m_f + 1; }
          if (stg.sexe === 'Feminin') { this.f_f = this.f_f + 1; }
          console.log(this.m_f);
          console.log(this.f_f);

        })
      },
      error => console.log(error));
  }

  // tslint:disable-next-line: member-ordering
  chart3 = {
    data: {
      datasets: [{
        data: [, 'f'],
        backgroundColor: ["#5b6582", "#98a4c7"],
      }],
      labels: [
        'Fils',
        'Filles'
      ]

    },
    options: {
      legend: {
        position: 'bottom',
        display: false
      },
      cutoutPercentage: 80
    }
  };

  reloadData() {
    this.listestagiaires = this.stgService.getStagiaireList();
    this.listeFormateurs = this.formateurService.getFormateurList();
    this.listeLivre = this.biblioServive.getBibliothequeList();
    this.listeCours = this.coursService.getCoursList();

    this.getcount();

  }
  getcount() {
    this.listestagiaires.subscribe(result => { this.nbrS = result.length });
    this.listeFormateurs.subscribe(result => { this.nbrF = result.length });
    this.listeLivre.subscribe(result => { this.nbrL = result.length });
    this.listeCours.subscribe(result => { this.nbrR = result.length });
  }

  ngOnInit() {

    this.reloadData();
    this.getSexeS();
    this.getSexeF();
    // tslint:disable-next-line: no-unused-expression
    new Chart('chart-line', {
      type: 'line',
      data: this.chart1.data,
      options: this.chart1.options
    });
    // tslint:disable-next-line: no-unused-expression
    new Chart('chart-bar', {
      type: 'bar',
      data: this.chart2.data,
      options: this.chart2.options
    });
    // tslint:disable-next-line: no-unused-expression
    new Chart('chart-doughnut', {
      type: 'doughnut',
      data: this.chart3.data,
      options: this.chart3.options
    });
  }





}
