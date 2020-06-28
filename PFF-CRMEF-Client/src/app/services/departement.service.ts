import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private baseUrl = 'http://localhost:8080/api/v1/departemnts';

  constructor(private http: HttpClient) { }


  getDepartement(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createtDepartement(stagiaires: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, stagiaires);
  }

  updatetDepartement(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletetDepartement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDepartementList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
