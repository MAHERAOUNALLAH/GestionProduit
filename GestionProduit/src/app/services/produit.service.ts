import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProduitService {
  apiURL = 'http://localhost:3000/produits';   // sans "/" final

  constructor(private http: HttpClient) {}

  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`, httpOptions);
  }

  consulterProduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiURL}/${id}`);
  }

  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiURL}/${prod.id}`, prod, httpOptions);
  }
}