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
    // l'input type="date" renvoie une chaîne : on la convertit en Date
    if (this.newProduit.dateCreation) {
      this.newProduit.dateCreation = new Date(this.newProduit.dateCreation);
    }
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['listeproduit']);
  }
}