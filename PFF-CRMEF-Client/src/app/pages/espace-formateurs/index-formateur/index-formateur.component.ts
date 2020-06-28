import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-formateur',
  templateUrl: './index-formateur.component.html',
  styleUrls: ['./index-formateur.component.scss']
})
export class IndexFormateurComponent implements OnInit {

  constructor() { }
  myDate = Date.now();
  ngOnInit() {
  }

}
