import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { ConseillerService } from '../../services/conseiller.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { Conseiller } from 'src/app/models/conseiller.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public clients: Client[] | null = null;
  public conseiller: Conseiller | null = null;

  constructor(
    private clientService: ClientService,
    private conseillerService: ConseillerService,
    private router: Router) { }

  ngOnInit(): void {
    this.conseillerService.conseiller$.subscribe((res) => {
      this.conseiller = res as Conseiller
      if (this.conseiller) {
        this.clientService.getClientByConseillerId(this.conseiller.id)
      }
      this.clientService.clientList$.subscribe((res) => {
        this.clients = res;
      })
    });

  }

  deconnect(){
    this.router.navigate([''])
  }
}
