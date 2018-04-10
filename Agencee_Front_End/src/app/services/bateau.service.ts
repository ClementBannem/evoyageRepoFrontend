import {AppComponent} from "../app.component";
import {Injectable} from '@angular/core';
import {RequestOptions} from "@angular/http";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {Bateau} from '../model/model.bateau';

@Injectable()
export class BateauService {

  private bateauUrl = 'http://localhost:8080/bateau/listebateaux';  // URL to web API
  private bateauxUrl_del = 'http://localhost:8080/bateau';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {}

  // Get all clients
  getBateau(): Promise<Bateau[]> {
    return this.http.get(this.bateauUrl)
      .toPromise()
      .then(response => response.json() as Bateau[])
      .catch(this.handleError);
  }

  createBateau(bateau: Bateau) {
    return this.http.post(AppComponent.API_URL + '/bateau/postbateau', bateau)
      .map(resp => resp.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  deleteBateau(id: Number) {
    return this.http.delete(this.bateauxUrl_del + '/bateaux/' + id, this.options).map((response: Response) => response.json());
  }
}
