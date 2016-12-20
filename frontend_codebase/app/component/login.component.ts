import { Component } from '@angular/core';
import { LoginService }   from '../services/login.service';
import { Login } from '../mock-jsons/mock-login';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'app/views/login.tpl'
})

export class LoginComponent  {

  loginObj : Login;
  resultData :  Login;
  userEmail : string;
  userPassword : string;
  results : Array<any> = [];
  error : Object = {};
  count : number = 0;

   messageText : string;
   messageLength : number;

  goToSignup = function() {
    this.router.navigate(['/signUp']);
  }

  onSubmit = function() {


    //TODO : call the login service
  //  LoginService.getLogin();
    // this.LoginService.getLoginData()
    //                 .subscribe(
    //                  response => this.results,
    //                  errorData =>  this.errorMessage);

    if(this.userEmail && this.userPassword) {
      this.resultData = this.service.getLoginData({'email':this.userEmail , 'password' : this.userPassword});
      this.router.navigate(['/edit']);

    } else {
      this.messageText = "Please enter values!";
      this.messageLength = 1;
    }

    // while(this.count in this.resultData.length){
    //
    //   console.log(this.resultData[this.count]);
    //   if(this.resultData[this.count].email === this.userEmail && this.resultData[this.count].password === this.userPassword) {
    //     alert("login successful");
    //   } else{
    //     alert("login not successful");
    //   }
    //    this.count++;
    // }

  }
  constructor(private service: LoginService , private router : Router){
    this.messageText = "Bad message";
    this.messageLength = 0;
    this.userEmail = "";
    this.userPassword = "";
    this.error = "";

  }


  }
