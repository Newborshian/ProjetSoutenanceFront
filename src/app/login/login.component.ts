import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConseillerService } from '../services/conseiller.service';
import { Client } from '../models/Client';

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

  clients: Client[];
  loggedIn: boolean = false; // Ajout d'une variable pour vérifier si l'utilisateur est connecté

  constructor(private conseillerService: ConseillerService, private formBuilder: FormBuilder) {
    this.clients = [];
   }

  ngOnInit(): void {}

  login(conseiller: FormGroup) {
    this.conseillerService.loginFromService(conseiller).subscribe((res) => {
      console.log(res);
      if (res === 1) {
        this.conseillerService.getInfoForLoggedFromService(conseiller).subscribe((clients) => {
          this.clients = clients; // Stockez la liste des clients
          console.log(clients);
          this.loggedIn = true; // Marquez l'utilisateur comme connecté
        });
      }
    });
  }
}
