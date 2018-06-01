import { AppComponent } from "../app.component";
import { AutoCar } from "../model/model.autocar";
import { Injectable } from "@angular/core";
import {RequestOptions} from "@angular/http";
import {Headers, Http, Response} from "@angular/http";
@Injectable()
export class AutocarService {
  private autocarsUrl = 'http://localhost:8080/autocar/listeTransportAutocar';  // URL to web API_liste des clients
  private autocarsUrl_del = 'http://localhost:8080/autocar';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {}
  
  // Get all autocars
  getAutocars(): Promise<AutoCar[]> {
    return this.http.get(this.autocarsUrl)
      .toPromise()
      .then(response => response.json() as AutoCar[])
      .catch(this.handleError);
  }

  createAutocar(autocar: AutoCar){
    return this.http.post(AppComponent.API_URL + '/autocar/postTransportAutocar', autocar)
      .map(resp => resp.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  deleteAutocar(id: Number) {
    return this.http.delete(this.autocarsUrl_del + '/autocars/' + id, this.options).map((response: Response) => response.json());
  }
 
}
