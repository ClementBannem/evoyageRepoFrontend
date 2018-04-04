import { AppComponent } from "../app.component";
import { Evenement } from "../model/model.evenement";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
@Injectable()
export class EvenementService {

   private evensUrl = 'http://localhost:8080/evenement/listeEvenement';  // URL to web API

  constructor(private http: Http) {}
  
  // Get all clients
  getEvenement(): Promise<Evenement[]> {
    return this.http.get(this.evensUrl)
      .toPromise()
      .then(response => response.json() as Evenement[])
      .catch(this.handleError);
  }

  createEvenement(evens: Evenement){
    return this.http.post(AppComponent.API_URL + '/evenement/postevement', evens)
      .map(resp => resp.json());
  }
 
   private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
