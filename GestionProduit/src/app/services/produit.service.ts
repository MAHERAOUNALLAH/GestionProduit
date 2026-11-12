import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProduitService {
  produits!: Produit[];
  apiurl:string="http://localhost:3000/produits"
  constructor(private http:HttpClient) {
    
  }

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiurl)
  }
  ajouterProduit( prod: Produit):Observable<Produit>{
    return this.http.post<Produit>(this.apiurl, prod);

}
  /*ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }
    


  

  supprimerProduit(prod: Produit) {
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }

  consulterProduit(id: number): Produit | undefined {
    return this.produits.find(p => p.id == id);
  }

  updateProduit(p: Produit) {
    const index = this.produits.findIndex(x => x.id === p.id);
    if (index > -1) {
      this.produits[index] = p;
    }
  }*/
}