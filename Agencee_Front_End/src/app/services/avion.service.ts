import { AppComponent } from "../app.component";
import { Avion } from "../model/model.avion";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AvionService {

  constructor(private http: Http) {}

  createAvion(avion: Avion){
    return this.http.post(AppComponent.API_URL + '/avion/posttransport', avion)
      .map(resp => resp.json());
  }
 
}
