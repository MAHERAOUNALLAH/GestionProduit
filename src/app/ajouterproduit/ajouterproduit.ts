import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-ajouterproduit',
  standalone: false,
  templateUrl: './ajouterproduit.html',
  styles: ``,
})
export class Ajouterproduit {
  newProduit = new Produit();

  addProduit() {
    console.log(this.newProduit);
  }
}