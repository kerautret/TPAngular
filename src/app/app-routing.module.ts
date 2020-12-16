import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {CompQCMTPComponent} from './comp-qcmtp/comp-qcmtp.component';
import {ConsultActiviteComponent} from './consult-activite/consult-activite.component';

const routes = [
  {
    path : 'aboutLink',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'QcmTP7',
    component: CompQCMTPComponent
  },
  {
    path : 'consultAct',
    component: ConsultActiviteComponent
  },
  {
    path: 'consultAct/:unParam',
    component: ConsultActiviteComponent
  },
  {
    path: 'consultAct/:unParam/:deuxParam',
    component: ConsultActiviteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
