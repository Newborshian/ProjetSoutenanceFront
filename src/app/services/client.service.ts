import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClientFromService(): Observable<Client[]>{
    return this.http.get('http://localhost:8080/client') as Observable<Client[]>
  };
}
