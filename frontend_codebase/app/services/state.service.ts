import { Injectable } from '@angular/core';
import { Logger } from '../services/logger.service';
import { State } from '../component/state';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StateService {

  private stateListUrl = 'http://services.groupkt.com/state/get/IND/all';  // URL to web api

  constructor(private http: Http) { }
  getState(): Promise<any> {
    console.log("in service");
    return this.http.get(this.stateListUrl)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
