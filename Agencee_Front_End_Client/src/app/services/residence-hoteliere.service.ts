import { AppComponent } from "../app.component";
import { Residence_Hoteliere } from "../model/model.residenceHoteliere";
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ResidenceHoteliereService {
  private resHotsUrl = 'http://localhost:8080/residenceHoteliere/listeHebergementResidenceHoteliere';  // URL to web API

  constructor(private http: Http) { }
  
  // Get all residences
  getResidenceHotelieres(): Promise<Residence_Hoteliere[]> {
    return this.http.get(this.resHotsUrl)
      .toPromise()
      .then(response => response.json() as Residence_Hoteliere[])
      .catch(this.handleError);
  }
  
  createResidenceHoteliere(resHot: Residence_Hoteliere){
    return this.http.post(AppComponent.API_URL + '/residenceHoteliere/postHebergementResidenceHoteliere', resHot)
      .map(resp => resp.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
