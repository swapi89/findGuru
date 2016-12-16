import { Component } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: 'app/views/signup.tpl'
})

export class SignUpComponent  {

    messageText : String;
    messageLength : Number;

  constructor(){
    console.log("singup componennt");
    this.messageText = "Bad message";
    this.messageLength = 0;
  }
}
