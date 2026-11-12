
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-listeproduit',
  standalone: false,
  templateUrl: './listeproduit.html',
  styles: ``,
})
export class Listeproduit implements OnInit {


  

  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit) {
    if (confirm('Etes-vous sûr ?')) {
      this.produitService.supprimerProduit(p.id!).subscribe(() => {
        console.log('produit supprimé');
        this.supprimerProduitDuTableau(p);   // pas de reload (partie VI)
      });
    }
  }

  supprimerProduitDuTableau(prod: Produit) {
    this.produits = this.produits.filter(cur => cur.id !== prod.id);
  }

    }

    /*supprimerProduit(p: Produit) {
      const conf = confirm('Etes-vous sûr ?');
      if (conf) this.produitService.supprimerProduit(p);
    }*/

