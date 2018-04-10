import { AppComponent } from "../app.component";
import { Gite } from "../model/model.gite";
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class GiteService {
  private gitesUrl = 'http://localhost:8080/gite/listeHebergementGite';  // URL to web API

  constructor(private http: Http) { }
  
  // Get all gites
  getGites(): Promise<Gite[]> {
    return this.http.get(this.gitesUrl)
      .toPromise()
      .then(response => response.json() as Gite[])
      .catch(this.handleError);
  }
  
  createGite(gite: Gite){
    return this.http.post(AppComponent.API_URL + '/gite/postHebergementGite', gite)
      .map(resp => resp.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
