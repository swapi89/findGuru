import { Component } from '@angular/core';
import { State } from '../component/state';
import { StateService }   from '../services/state.service';
@Component({
  selector: 'home',
  templateUrl: 'app/views/home.tpl'
})

export class HomeComponent{
  //stateObj: State;
  resultData: any;
  constructor(private stateService : StateService){
  }

ngOnInit(){
    this.stateService.getState().then(result => {
    this.resultData = result;
    console.log(this.resultData);
  });

}

  }
