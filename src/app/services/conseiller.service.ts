import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, catchError, of, tap, throwError } from 'rxjs';
import { Client } from '../models/client.model';
import { Conseiller } from '../models/conseiller.model';
import { ClientService } from './client.service';
import { ConseillerAuthentification } from '../dtos/conseillerAuthentification.dto';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {



  public conseiller$: BehaviorSubject<Conseiller | null> = new BehaviorSubject<Conseiller | null>(null);

  constructor(private http: HttpClient, private clientService: ClientService) { }

  login(conseiller: Partial<ConseillerAuthentification>) {
    return this.http.post<Conseiller>('http://localhost:8080/conseiller/login', conseiller)
      .pipe(
        catchError((error) => {
          console.error('Erreur de connexion', error);
          return throwError('Erreur de connexion');
        }),
        tap((res) => {
          this.conseiller$.next(res as Conseiller);
        })
      );
  }
}