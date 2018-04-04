import { AppComponent } from "../app.component";
import { Offre } from "../model/model.offre";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class OffreService {

   private offreUrl = 'http://localhost:8080/offre/listeOffre';  // URL to web API

  constructor(private http: Http) {}
  
  // Get all clients
  getOffre(): Promise<Offre[]> {
    return this.http.get(this.offreUrl)
      .toPromise()
      .then(response => response.json() as Offre[])
      .catch(this.handleError);
  }

  createOffre(offre: Offre){
    return this.http.post(AppComponent.API_URL + '/offre/postOffre', offre)
      .map(resp => resp.json());
  }
 
   private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
