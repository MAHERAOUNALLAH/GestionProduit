import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listeproduit } from './listeproduit/listeproduit';
import { Ajouterproduit } from './ajouterproduit/ajouterproduit';
import { UpdateProduit } from './update-produit/update-produit';
import { PagenotFound } from './pagenot-found/pagenot-found';

const routes: Routes = [
  { path: 'produits', component: Listeproduit },
  { path: 'ajouterProduit', component: Ajouterproduit },
  { path: 'updateProduit/:id', component: UpdateProduit },
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  { path: '**', component: PagenotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

