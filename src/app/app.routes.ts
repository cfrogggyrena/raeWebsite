// import { Routes } from '@angular/router';

// export const routes: Routes = [];

// 

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
  { path: '', component: HomeComponent}, //default route 
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }