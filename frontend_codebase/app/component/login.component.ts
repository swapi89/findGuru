import { Component } from '@angular/core';
import { LoginService }   from '../services/login.service';
import { Login } from '../mock-jsons/mock-login';

@Component({
  selector: 'login',
  templateUrl: 'app/views/login.tpl'
})

export class LoginComponent  {

  loginObj : Login;
  userEmail : string;
  userPassword : string;
  results : Array<any> = [];
  error : Object = {};

   messageText : string;
   messageLength : number;

  goToSignup = function() {
    alert("signup page will trigger");
  }

  onSubmit = function(e : any) {
    e.preventDefault();

    //TODO : call the login service
  //  LoginService.getLogin();
    // this.LoginService.getLoginData()
    //                 .subscribe(
    //                  response => this.results,
    //                  errorData =>  this.errorMessage);

    this.loginObj = this.LoginService.getLoginData();

    if(this.loginObj.email === this.userEmail && this.loginObj.password === this.userPassword) {
      alert("login successful");
    } else{
      alert("login not successful");
    }
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
