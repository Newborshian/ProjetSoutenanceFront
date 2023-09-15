import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { ConseillerService } from '../../services/conseiller.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { Conseiller } from 'src/app/models/conseiller.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  clientList = false;
  isLoanSimulation = false;
  isClientList = false;
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
}
