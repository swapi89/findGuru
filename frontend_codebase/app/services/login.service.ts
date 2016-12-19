import { Injectable } from '@angular/core';
import { Logger } from '../services/logger.service';
import { Login, LOGIN } from '../mock-jsons/mock-login';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private loginUrl : String = 'api/login';  // URL to web api
  // public results : Array<any>;

    // constructor(
    //   private logger: Logger
    //
    // ){}

      getLoginData() : Login[] {
        return LOGIN;
      }
  //   getLoginData ():  Observable<results[]>{
  //   return this.http.get(this.loginUrl)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

 //  private extractData(res: Response) {
 //   let body = res.json();
 //   return body.data || { };
 // }

//  private handleError (error: Response | any) {
//   // In a real world app, we might use a remote logging infrastructure
//   let errMsg: string;
//   if (error instanceof Response) {
//     const body = error.json() || '';
//     const err = body.error || JSON.stringify(body);
//     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//   } else {
//     errMsg = error.message ? error.message : error.toString();
//   }
//   console.error(errMsg);
//   return Observable.throw(errMsg);
// }

}
