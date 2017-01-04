import { Component } from '@angular/core';
import { State } from '../interface/state';
import { StateService }   from '../services/state.service';
@Component({
  selector: 'home',
  templateUrl: 'app/views/home.tpl'
})

export class HomeComponent{
  resultData: any;
  stateList: any;
  constructor(private stateService : StateService){ }

  ngOnInit(){
    this.stateService.getState().then(result => {
    this.stateList = result.RestResponse.result;
  });
  }

}
