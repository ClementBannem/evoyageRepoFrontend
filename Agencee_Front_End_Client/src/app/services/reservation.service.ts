import {AppComponent} from "../app.component";
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Reservation} from '../model/model.reservation';
import {RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ReservationService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) { }

  // createReservation(reservation: Reservation) {
  //   return this.http.post(AppComponent.API_URL + '/reservation/postReservation', reservation)
  //     .map(resp => resp.json());
  // }

  createReservation(id: number, value: any):Observable<Object> {
    return this.http.put(AppComponent.API_URL + '/reservation/postReservation/' + id, value)
      .map(resp => resp.json());
  }

}
