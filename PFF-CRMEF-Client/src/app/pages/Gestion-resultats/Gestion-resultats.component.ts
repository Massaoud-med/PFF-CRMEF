import { Note } from './../../model/Note';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceStagiaireService } from 'src/app/services/stagiaire.service';
import { HttpEvent, HttpRequest, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Gestion-resultats',
  templateUrl: './Gestion-resultats.component.html',
  styleUrls: ['./Gestion-resultats.component.scss']
})
export class GestionResultatsComponent implements OnInit {


  files: any = [];

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  Note: Observable<Note[]>;

  file: any;
  constructor(private resultatService: ServiceStagiaireService, private http: HttpClient) { }

  ngOnInit() {
    this.reloadData();
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  reloadData() {
    this.Note = this.resultatService.getFiles();
    console.log(this.Note);
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.resultatService.uploadeExcel(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.Note = this.resultatService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }



}
