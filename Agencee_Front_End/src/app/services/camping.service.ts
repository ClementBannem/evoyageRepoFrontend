import { AppComponent } from "../app.component";
import { Camping } from "../model/model.camping";
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class CampingService {
  private campingsUrl = 'http://localhost:8080/camping/listeHebergementCamping';  // URL to web API

  constructor(private http: Http) { }
  
  // Get all campings
  getCampings(): Promise<Camping[]> {
    return this.http.get(this.campingsUrl)
      .toPromise()
      .then(response => response.json() as Camping[])
      .catch(this.handleError);
  }
  
  createCamping(camping: Camping){
    return this.http.post(AppComponent.API_URL + '/camping/postHebergementCamping', camping)
      .map(resp => resp.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
