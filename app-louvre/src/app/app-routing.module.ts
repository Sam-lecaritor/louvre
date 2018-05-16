import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarifsComponent } from './tarifs/tarifs.component';
import { PanierComponent } from './panier/panier.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
/*
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component'; */

const routes: Routes = [

  { path: '', redirectTo: '/tarifs', pathMatch: 'full' },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'formulaire', component: FormulaireComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
