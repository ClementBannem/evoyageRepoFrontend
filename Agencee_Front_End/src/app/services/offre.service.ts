import {AppComponent} from "../app.component";
import {Offre} from "../model/model.offre";
import {Injectable} from "@angular/core";
import { Http, Headers,Response } from "@angular/http";
import { RequestOptions } from "@angular/http";

@Injectable()
export class OffreService {

  private offreUrl = 'http://localhost:8080/offre/listeOffres';  // URL to web API
  private offreUrl_del = 'http://localhost:8080/offre';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {}

  // Get all clients
  getOffre(): Promise<Offre[]> {
    return this.http.get(this.offreUrl)
      .toPromise()
      .then(response => response.json() as Offre[])
      .catch(this.handleError);
  }

  createOffre(offre: Offre) {
    return this.http.post(AppComponent.API_URL + '/offre/postOffre', offre)
      .map(resp => resp.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  deleteOffre(id:Number){
    return this.http.delete(this.offreUrl_del+'/offres/'+id,this.options).map((response:Response)=>response.json());
  }
}
