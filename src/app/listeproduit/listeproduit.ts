
import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-listeproduit',
  standalone: false,
  templateUrl: './listeproduit.html',
  styles: ``,
})
export class Listeproduit {
  produits: Produit[];

  constructor(private produitService: ProduitService) {
    this.produits = produitService.listeProduits();
  }

  supprimerProduit(p: Produit) {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) this.produitService.supprimerProduit(p);
  }
}