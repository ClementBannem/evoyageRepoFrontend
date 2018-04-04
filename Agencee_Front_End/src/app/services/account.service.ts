import {Injectable} from '@angular/core';
import {User} from '../model/model.user';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';

@Injectable()
export class AccountService {

  constructor(public http: Http) {}

  createAccount(user: User) {
    return this.http.post(AppComponent.API_URL + '/account/register', user)
      .map(resp => resp.json());
  }

  Accounts(user: User) {
    return this.http.post(AppComponent.API_URL + '/user', user)
      .map(resp => resp.json());
  }
}
