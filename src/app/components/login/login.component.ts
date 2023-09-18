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
public loginSucess: boolean | undefined;

constructor(private conseillerService: ConseillerService,
  private formBuilder: FormBuilder,
  private router: Router,
  private clientService: ClientService
  ) { }

ngOnInit(): void {

}

login(conseillerForm: FormGroup) {
  const conseillerAuth: Partial<ConseillerAuthentification> = conseillerForm.value;
  this.conseillerService.login(conseillerAuth).subscribe(
    (res) => {
      this.loginSucess = true;
      localStorage.setItem('login', 'true');
      this.conseillerService.login(conseillerAuth);
      this.router.navigate(['home']);
    },
    (error) => {
      this.loginSucess = false;
      console.error('Connexion non valide', error);
    }
  );
}
}  
