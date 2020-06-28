import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacanceService {

  private baseUrl = 'http://localhost:8080/api/v1/vacance';


  constructor(private http: HttpClient) { }


  getVacance(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVacance(stagiaires: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, stagiaires);
  }

  updateVacance(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteVacance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVacanceList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
