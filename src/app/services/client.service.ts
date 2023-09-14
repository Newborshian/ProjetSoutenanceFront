import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public clientList$: BehaviorSubject<Client[] | null> = new BehaviorSubject<Client[] | null>(null);

  constructor(private http: HttpClient) { }

  getClientByConseillerId(id: number) {
    console.log("coucou");5
    
    this.http.get('http://localhost:8080/client?id=' + id).subscribe((res) => {
      console.log(res);
      
      this.clientList$.next(res as Client[]);
    })
  }

}
