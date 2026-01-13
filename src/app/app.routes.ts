// import { Routes } from '@angular/router';

// export const routes: Routes = [];

// 

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



export const routes: Routes = [
  { path: '', component: HomeComponent}, //default route so the first page that loads is home
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }