import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-ajouterproduit',
  standalone: false,
  templateUrl: './ajouterproduit.html',
  styles: ``,
})

export class Ajouterproduit {
  newProduit = new Produit();

  constructor(private produitService: ProduitService) {}

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit);
  }
}