import { AppComponent } from "../app.component";
import { Avion } from "../model/model.avion";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AvionService {
  private avionsUrl = 'http://localhost:8080/avion/listeTransportAvion';  // URL to web API_liste des clients

  constructor(private http: Http) {}
  
  // Liste de voyage en avions
  getAvions(): Promise<Avion[]> {
    return this.http.get(this.avionsUrl)
      .toPromise()
      .then(response => response.json() as Avion[])
      .catch(this.handleError);
  }

  createAvion(avion: Avion){
    return this.http.post(AppComponent.API_URL + '/avion/postTransportAvion', avion)
      .map(resp => resp.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
 
}
