import { Injectable } from '@angular/core';
import { Logger } from '../services/logger.service';
import { Login, LOGIN } from '../mock-jsons/mock-login';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private loginUrl = 'http://localhost:7007/login';  // URL to web api

  constructor(private http: Http) { }

  // TODO : if you want to return mock json data
  // getLoginData() : Login[] {
  //   return LOGIN;
  // }

  getLoginData(loginObj :  any): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'text/plain' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.loginUrl,loginObj)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
