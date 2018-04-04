import { AppComponent } from "../app.component";
import { AutoCar } from "../model/model.autocar";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
@Injectable()
export class AutocarService {

  constructor(private http: Http) {}

  createAutocar(autocar: AutoCar){
    return this.http.post(AppComponent.API_URL + '/autocar/posttransport', autocar)
      .map(resp => resp.json());
  }
 
}
