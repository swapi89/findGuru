import { Injectable } from '@angular/core';
import { Logger } from '../services/logger.service';
import { Login, LOGIN } from '../mock-jsons/mock-login';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private loginUrl = 'https://jsonplaceholder.typicode.com';  // URL to web api

  constructor(private http: Http) { }

  // TODO : if you want to return mock json data
  // getLoginData() : Login[] {
  //   return LOGIN;
  // }

  getLoginData(loginObj :  any): Promise<any> {
    return this.http.get(this.loginUrl + '/posts/1')
    .toPromise()
    .then(response => response.json().data)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
