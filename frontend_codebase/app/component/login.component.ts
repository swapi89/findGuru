import { Component } from '@angular/core';
import { LoginService }   from '../services/login.service';
import { Login } from '../mock-jsons/mock-login';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'app/views/login.tpl'
})

export class LoginComponent   {

  loginObj : Login;
  userEmail : string;
  userPassword : string;
  results : Array<any> = [];
  isSelected : Boolean;
  count : number = 0;
  self : any;

   messageText : string;
   messageLength : number;

  goToSignup = function() {
    this.router.navigate(['/signUp']);
  }

  onSubmit = function() {

    if(this.userEmail && this.userPassword) {
     this.service.getLoginData({'email':this.userEmail,'password':this.userPassword}).then(dataFetched => {
        this.messageLength =  1;
        this.messageText =  dataFetched.success ? dataFetched.data.msg : dataFetched.data ;
        this.isSelected = dataFetched.success;
        if( dataFetched.success )
         this.router.navigate(['/edit',dataFetched.data.username]);
     });

    } else {
      this.messageText = "Please enter values!";
      this.messageLength = 1;
      this.isSelected = false;
    }

  }
  constructor(private service: LoginService , private router : Router){
    var self = this;
    this.messageText = "Bad message";
    this.messageLength = 0;
    this.userEmail = "";
    this.userPassword = "";
    this.isSelected = false;

  }


  }
