/**
 * Created by jake.cox on 4/21/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../Auth/auth-guard.service';
import { AuthService }          from '../Auth/auth.service';
import { LoginComponent }       from './login.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}
