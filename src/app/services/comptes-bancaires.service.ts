import { Injectable } from "@angular/core";
import { CompteBancaire } from "../models/compte-bancaire-model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from "../models/client.model";

@Injectable({
    providedIn: 'root'
})
export class CompteBancaireService {

    constructor(private http: HttpClient){}

    comptesBancaires: CompteBancaire[] = []

     getAllComptesBancaire(): Observable<CompteBancaire[]>{
        return this.http.get<CompteBancaire[]>('http://localhost:8080/compteCourant')
     }

     getCompteCourantById(compteId: number): Observable<CompteBancaire>{
        return this.http.get<CompteBancaire>(`http://localhost:8080/compteCourant/${compteId}`)
     }

     getCompteEpargneById(compteId: number): Observable<CompteBancaire>{
      return this.http.get<CompteBancaire>(`http://localhost:8080/compteEpargne/${compteId}`)
   }

   getComptesByIdClient(clientId: number): Observable<CompteBancaire[]>{
     
    return this.http.get<CompteBancaire[]>(`http://localhost:8080/compteCourant/comptesByIdClient?id=`+ clientId)
   }

   deleteCompteCourant(compteId: number): Observable<CompteBancaire>{
      return this.http.delete<CompteBancaire>(`http://localhost:8080/compteCourant/${compteId}`)
   }

   deleteCompteEpargne(compteId: number): Observable<CompteBancaire>{
      return this.http.delete<CompteBancaire>(`http://localhost:8080/compteEpargne/${compteId}`)
   }

}