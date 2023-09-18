import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

public clientList$: BehaviorSubject<Client[] | null> = new BehaviorSubject<Client[] | null>(null);

constructor(private http: HttpClient) { }

getClientByConseillerId(id: number) {
  this.http.get('http://localhost:8080/client?id=' + id).subscribe((res) => {
    console.log(res);
      
    this.clientList$.next(res as Client[]);
  })
}

postClient(client : Client) : Observable<Client[]> {
  console.log(client);
  return this.http.post<Client[]>('http://localhost:8080/client', client);
}

  getClientByName(name: NgForm): Observable<Client[]>{
    let lastname = name.value.lastname;
    return this.http.get('http://localhost:8080/client/name/' + lastname) as Observable<Client[]>;
  }
    
  updateClient(client : Client) : Observable<Client> {
    return this.http.put<Client>(`http://localhost:8080/client/${client.id}`, client);
  }
    
  getClientById(clientId: number): Observable<Client> {
    return this.http.get<Client>(`http://localhost:8080/client/${clientId}`);
  }

  deleteClientById(clientId: number): Observable<number> {
    console.log(clientId)
    return this.http.delete<number>(`http://localhost:8080/client/${clientId}`);
  }
}
