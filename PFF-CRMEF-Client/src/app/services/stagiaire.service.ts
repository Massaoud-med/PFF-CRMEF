import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceStagiaireService {


  private baseUrl = 'http://localhost:8080/api/v1/stagiaires';
  private baseUrlR = 'http://localhost:8080/api/v1';


  constructor(private http: HttpClient) { }


  getStagiaire(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStagiaire(stagiaires: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, stagiaires);
  }

  updateStagiaire(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStagiaire(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStagiaireList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


  //////////////////////////////////////////////

  getResultat(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlR}/${id}`);
  }

  createResultat(stagiaires: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlR}`, stagiaires);
  }

  updateResultat(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlR}/${id}`, value);
  }

  deleteResultat(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlR}/${id}`, { responseType: 'text' });
  }

  getResultatList(): Observable<any> {
    return this.http.get(`${this.baseUrlR}`);
  }

 /* uploadeExcel(file: File): Observable<any> {
    return this.http.post(`${this.baseUrlR}`, file);
  }*/

  uploadeExcel(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrlR}/UploadExcel`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }


  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrlR}/notes`);
  }
}
