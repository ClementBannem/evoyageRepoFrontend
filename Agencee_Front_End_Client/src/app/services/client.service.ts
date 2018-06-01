import {AppComponent} from "../app.component";
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Client} from '../model/model.client';
import {RequestOptions} from "@angular/http";

@Injectable()
export class ClientService {
  private clientsUrl = 'http://localhost:8080/fiche/ficheclients';  // URL to web API_liste des clients
  private clientsUrl_upd = 'http://localhost:8080/fiche/updateficheclient';  // URL to web API_liste des clients
  private clientsUrl_del = 'http://localhost:8080/fiche';  // URL to web API_suppr client
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private cust = new Client();

  constructor(private http: Http) {}

  // Get all clients
  getClients() {
    return this.http.get(this.clientsUrl).map(response => response.json() as Client[]);
  }

  createClient(client: Client) {
    return this.http.post(AppComponent.API_URL + '/fiche/postficheclient', client)
      .map(resp => resp.json());
  }

  updateClient(client: Client) {
    return this.http.put(AppComponent.API_URL + '/fiche/updateficheclient', client)
      .map(resp => resp.json());
  }

  deleteClient(id: Number) {
    return this.http.delete(this.clientsUrl_del + '/client/' + id, this.options).map((response: Response) => response.json());

  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
