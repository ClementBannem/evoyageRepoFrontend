import { AppComponent } from "../app.component";
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Bateau} from '../model/model.bateau';

@Injectable()
export class BateauService {

   private bateauUrl = 'http://localhost:8080/bateau/listetransport';  // URL to web API

  constructor(private http: Http) {}
  
  // Get all clients
  getBateau(): Promise<Bateau[]> {
    return this.http.get(this.bateauUrl)
      .toPromise()
      .then(response => response.json() as Bateau[])
      .catch(this.handleError);
  }

  createBateau(bateau: Bateau){
    return this.http.post(AppComponent.API_URL + '/bateau/posttransport', bateau)
      .map(resp => resp.json());
  }
 
   private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
