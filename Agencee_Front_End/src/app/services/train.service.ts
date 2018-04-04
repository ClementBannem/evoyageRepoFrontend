import { AppComponent } from "../app.component";
import { Train } from "../model/model.train";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class TrainService {

  constructor(private http: Http) {}

  createTrain(train: Train){
    return this.http.post(AppComponent.API_URL + '/train/posttransport', train)
      .map(resp => resp.json());
  }
 
}
