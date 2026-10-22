import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  standalone: false,
  templateUrl: './update-produit.html',
  styles: ``,
})
export class UpdateProduit implements OnInit {
  currentProduit = new Produit();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    const prod = this.produitService.consulterProduit(id);

    if (prod) {
      this.currentProduit = { ...prod };
    } else {
      console.warn(`Aucun produit trouvé avec l'id ${id}`);
    }
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['listeproduit']);
  }
}