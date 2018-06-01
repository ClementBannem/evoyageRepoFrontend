import { AppComponent } from "../app.component";
import { Train } from "../model/model.train";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class TrainService {
  private trainsUrl = 'http://localhost:8080/train/listeTransportTrain';  // URL to web API_liste des clients

  constructor(private http: Http) {}
  
  // Liste de voyage en trains
  getTrains(): Promise<Train[]> {
    return this.http.get(this.trainsUrl)
      .toPromise()
      .then(response => response.json() as Train[])
      .catch(this.handleError);
  }

  createTrain(train: Train){
    return this.http.post(AppComponent.API_URL + '/train/postTransportTrain', train)
      .map(resp => resp.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
 
}
