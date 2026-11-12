import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listeproduit } from './listeproduit/listeproduit';
import { Ajouterproduit } from './ajouterproduit/ajouterproduit';
import { UpdateProduit } from './update-produit/update-produit';
import { PagenotFound } from './pagenot-found/pagenot-found';

const routes: Routes = [
  { path: 'listeproduit', component: Listeproduit },
  { path: 'ajouterproduit', component: Ajouterproduit },
  { path: 'updateproduit/:id', component: UpdateProduit },
  { path: '', redirectTo: 'listeproduit', pathMatch: 'full' },
  { path: '**', component: PagenotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }