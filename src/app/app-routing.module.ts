import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PagePanierComponent } from './pages/page-panier/page-panier.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: PageAccueilComponent},
  {path: 'details', component: PageDetailsComponent},
  {path: 'panier', component: PagePanierComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
