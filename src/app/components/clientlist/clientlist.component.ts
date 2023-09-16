import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { Conseiller } from 'src/app/models/conseiller.model';
import { ClientService } from 'src/app/services/client.service';
import { ConseillerService } from 'src/app/services/conseiller.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {
 
  public clients: Client[] | null = null;
  public conseiller: Conseiller | null = null;
  constructor(private conseillerService: ConseillerService
    , private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.conseillerService.conseiller$.subscribe((res) => {
      this.conseiller = res as Conseiller
      if (this.conseiller) {
        this.clientService.getClientByConseillerId(this.conseiller.id)
      }
      this.clientService.clientList$.subscribe((res) => {
        console.log(res);
        
        this.clients = res;
        console.log(this.clients);
      })
    });
  }
  onAddNewClient() {
    this.router.navigateByUrl('newClient');
  }
  searchByOrder(filter: string) {
    switch(filter) {
      case 'croissant': this.clients = this.clients!.sort(function (a, b) {return a.lastname.localeCompare(b.lastname)}); break;
      case 'decroissant': this.clients = this.clients!.sort(function (a, b) {return b.lastname.localeCompare(a.lastname)}); break;
    }
  }

  getClientByName(name: NgForm) {
    this.clientService.getClientByName(name).subscribe((res: Client[]) => {
      this.clients = res;
    });
  }
}
