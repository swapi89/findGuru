import { NgModule }        from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent }  from './component/login.component';
import { IndexComponent }  from './component/index.component';
import { EditComponent }  from './component/edit.component';
import { SignUpComponent }  from './component/signup.component';
import { ProfileComponent }  from './component/profile.component';

const appRoutes: Routes = [
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'edit/:username',  component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
