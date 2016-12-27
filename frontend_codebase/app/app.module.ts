import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Headers, HttpModule }    from '@angular/http';
import { RouterModule , Routes }  from '@angular/router';


import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app.routingModule';

// COMPONENTS
import { LoginComponent }  from './component/login.component';
import { IndexComponent }  from './component/index.component';
import { EditComponent }  from './component/edit.component';
import { SignUpComponent }  from './component/signup.component';
import { ProfileComponent }  from './component/profile.component';
import { HomeComponent }  from './component/home.component';

//SERVICES
 import { LoginService }   from './services/login.service';
 import { StateService }   from './services/state.service';
 import { Logger }   from './services/logger.service';


@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule ,  AppRoutingModule ],
  declarations: [ AppComponent , LoginComponent, IndexComponent, EditComponent, SignUpComponent, ProfileComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ Logger, LoginService, StateService]
})
export class AppModule { }
