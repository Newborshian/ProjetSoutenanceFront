import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {

  constructor(private http: HttpClient) { }

  loginFromService(conseiller: FormGroup){
    return this.http.get('http://localhost:8080/conseiller/login?lastname=' + conseiller.value.lastname + '&firstname=' + conseiller.value.firstname);
  }

  getInfoForLoggedFromService(conseiller: FormGroup): Observable<Client[]>{
    return this.http.get('http://localhost:8080/conseiller/getinfo?lastname=' + conseiller.value.lastname + '&firstname=' + conseiller.value.firstname) as Observable<Client[]>;
  }
}
