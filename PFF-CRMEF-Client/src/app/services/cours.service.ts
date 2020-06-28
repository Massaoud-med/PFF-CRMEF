import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private baseUrl = 'http://localhost:8080/api/v1/Cours';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param id 
   *    * Récupérer un cours  par id
   */
  getCours(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  /**
   * 
   * @param cours 
   *  * create un nouveau cours 
   */
  createCours(cours: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cours);
  }

  /**
   * 
   * @param id 
   * @param value 
   *      * update un cours par son id  
   * par méthode put
   */
  updateCours(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  /**
   * 
   * @param id 
    * supprimer un livre par son id 
   *  par méthode delete
   */
  deleteCours(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  /**
   *   * Récupérer une liste des cours  
   * par méthode get
   */
  getCoursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
