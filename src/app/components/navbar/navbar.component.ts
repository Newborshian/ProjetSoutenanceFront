import { Component, OnInit,Input } from '@angular/core';
import { Client } from '../../models/client.model';
import { ConseillerService } from '../../services/conseiller.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { Conseiller } from 'src/app/models/conseiller.model';

import { CookieService } from 'ngx-cookie-service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() currentClient! : Client;

  public clients: Client[] | null = null;
  public conseiller: Conseiller | null = null;

  clientList = false;
  isLoanSimulation = false;
  isClientList = false;
  isHome = true;

  constructor(
    private clientService: ClientService,
    private conseillerService: ConseillerService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {

  }
  deconnect(){
    this.router.navigate([''])
    location.reload();
  }

  onAddNewClient() {
    this.router.navigateByUrl('newClient');
  }

onUpdateClient(clientId: number) {
  this.router.navigateByUrl(`updateClient/${clientId}`);
}

  searchByOrder(filter: string) {
    switch(filter) {
      case 'croissant': this.clients = this.clients!.sort(function (a, b) {return a.lastname.localeCompare(b.lastname)}); break;
    }
  }

}



