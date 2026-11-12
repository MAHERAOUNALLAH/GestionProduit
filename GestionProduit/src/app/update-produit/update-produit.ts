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
  this.produitService.consulterProduit(id).subscribe(prod => {
    this.currentProduit = prod;
  });
}

updateProduit() {
  this.produitService.updateProduit(this.currentProduit).subscribe({
    next: () => this.router.navigate(['produits']),
    error: () => alert('Problème lors de la modification !')
  });
}}