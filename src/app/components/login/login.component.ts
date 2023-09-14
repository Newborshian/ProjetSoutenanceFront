import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConseillerService } from '../services/conseiller.service';
import { Client } from '../models/Client';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    lastname: ['', Validators.required],
    firstname: ['', Validators.required]
  });

  clients: Client[] = [];
  loggedIn = false;

  constructor(private conseillerService: ConseillerService, 
    private formBuilder: FormBuilder, 
    private router: Router,
    private clientService: ClientService) { }

  ngOnInit(): void {}

  login(conseillerForm: FormGroup) {
    this.conseillerService.loginFromService(conseillerForm).subscribe((res) => {
      console.log(res);
      if (res === 1) {
        this.conseillerService.getInfoForLoggedFromService(conseillerForm).subscribe((clients) => {
          this.clients = clients;
          console.log(clients);
          this.clientService.listOfClients(clients);
          this.loggedIn = true; 
        });
        this.router.navigate(['navbar'])
      }
    });
  }
}
