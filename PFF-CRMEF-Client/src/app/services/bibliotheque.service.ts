import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliothequeService {

  private baseUrl = 'http://localhost:8080/api/v1/bibliotheque';

  constructor(private http: HttpClient) { }


  /**
   * 
   * @param id 
   * Récupérer un stagiaires  par id
   */
  getBibliotheque(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  /**
   * 
   * @param biblio 
   * create un nouveau Livre
   */
  createtBibliotheque(biblio: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, biblio);
  }
  /**
   * 
   * @param id 
   * @param value 
   * update un livre par son id  
   * par méthode put
   */


  updatetBibliotheque(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  /**
   * 
   * @param id 
   * supprimer un livre par son id 
   *  par méthode delete
   */
  deletetBibliotheque(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  /**
   *   * Récupérer une liste des stagiaires  
   * par méthode get
   */
  getBibliothequeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
