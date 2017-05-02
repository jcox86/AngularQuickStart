/**
 * Created by jake.cox on 4/21/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JakeComponent} from './Features/Jake/jake.component';

const routes: Routes = [
  { path: '', redirectTo: '/jake', pathMatch: 'full' },
  { path: 'jake',  component: JakeComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
