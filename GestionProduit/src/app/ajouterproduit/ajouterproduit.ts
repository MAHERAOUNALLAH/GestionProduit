import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private produitService: ProduitService, private router: Router) {}

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit).subscribe({
      next: (prod) => {
        console.log(prod);
        this.router.navigate(['listeproduit']);
      },
      error: (err) => console.error('Erreur ajout produit :', err),
    });
  }
}
