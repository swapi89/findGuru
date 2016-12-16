import { Component } from '@angular/core';
import { LoginService }   from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/views/login.tpl'
})

export class LoginComponent  {

  loginObj : Object;
  userEmail : string;
  userPassword : string;
  results : Array<any> = [];
  error : Object = {};

   messageText : string;
   messageLength : number;

  goToSignup = function() {
    alert("signup page will trigger");
  }

  onSubmit = function() {

    //TODO : call the login service
  //  LoginService.getLogin();
    // this.LoginService.getLoginData()
    //                 .subscribe(
    //                  response => this.results,
    //                  errorData =>  this.errorMessage);
  }
  constructor(private service: LoginService){
    this.messageText = "Bad message";
    this.messageLength = 0;
    this.userEmail = "";
    this.userPassword = "";
    this.results = [];
    this.error = "";
  }


  }
