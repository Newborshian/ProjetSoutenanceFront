import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConseillerService } from '../../services/conseiller.service';
import { Client } from '../../models/client.model';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { ConseillerAuthentification } from 'src/app/dtos/conseillerAuthentification.dto';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    mail: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private conseillerService: ConseillerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
  }

   login(conseillerForm: FormGroup) {
    const conseillerAuth: Partial<ConseillerAuthentification> = conseillerForm.value;
    this.conseillerService.login(conseillerAuth);
    this.router.navigate(['navbar']);
  }
}
