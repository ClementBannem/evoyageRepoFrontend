import {AppComponent} from "../app.component";
import {Evenement} from "../model/model.evenement";
import {Injectable} from "@angular/core";
import {RequestOptions} from "@angular/http";
import {Headers, Http, Response} from "@angular/http";

@Injectable()
export class EvenementService {

  private evensUrl = 'http://localhost:8080/evenement/listeEvenement';  // URL to web API
  private evensUrl_del = 'http://localhost:8080/evenement';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {}

  // Get all events
  getEvenement(): Promise<Evenement[]> {
    return this.http.get(this.evensUrl)
      .toPromise()
      .then(response => response.json() as Evenement[])
      .catch(this.handleError);
  }

  createEvenement(evens: Evenement) {
    return this.http.post(AppComponent.API_URL + '/evenement/postevement', evens)
      .map(resp => resp.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  deleteEvenement(id: Number) {

    return this.http.delete(this.evensUrl_del + '/evenements/' + id, this.options).map((response: Response) => response.json());
  }
}
