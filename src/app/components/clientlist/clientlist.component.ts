import { Component, Input, OnInit } from '@angular/core';
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
 
  @Input()
  public clients: Client[]  | null = null;

  constructor(private conseillerService: ConseillerService, private clientService: ClientService) { }

  ngOnInit(): void {

  }

}
