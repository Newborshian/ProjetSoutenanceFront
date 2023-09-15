import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrls: ['./new-client-form.component.css']
})
export class NewClientFormComponent implements OnInit {

  clientForm: FormGroup = this.formBuilder.group({
    lastname: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[A-Za-z\s\-]+$/)]],
    firstname: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s\-]+$/)]],
    address: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^\d+\s[a-zA-Z\s]+$/)]],
    city: ['', [Validators.required, Validators.maxLength(50),Validators.pattern(/^[A-Za-z\s\-]+$/)]],
    zipcode: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(5), Validators.minLength(5)]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^\d+$/)]],
    idConseiller: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(1),Validators.maxLength(2)]],
  });
  
  newClientPreview$! : Observable<Client>;

  constructor(private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router) { }
 
// Affillier l'id du conseiller actuel

  ngOnInit(): void {
    // this.clientForm = this.formBuilder.group({
    //   lastname: ['', [Validators.required, Validators.minLength(3)]],
    //   firstname: ['', [Validators.required, Validators.maxLength(20)]],
    //   address: ['', [Validators.required, Validators.maxLength(25)]],
    //   city: ['', [Validators.required, Validators.maxLength(50)]],
    //   zipcode: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(5), Validators.minLength(5)]],
    //   phoneNumber: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]],
    //   idConseiller: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(1),Validators.maxLength(2)]],
    // }, {
    //   updateOn: 'blur',
    // });

    this.newClientPreview$ = this.clientForm.valueChanges.pipe(
      map(formValue => ({
          ...formValue,
      }))
    );
}

onSubmitForm() {
this.clientService.postClient(this.clientForm.value).subscribe(
  (response) => {
    // La requête a réussi, vous pouvez gérer la réponse ici
    console.log("Client enregistré avec succès !", response);
    this.router.navigateByUrl('/navbar');
  },
  (error) => {
    // La requête a échoué, vous pouvez gérer l'erreur ici
    console.error("Erreur lors de l'enregistrement du client :", error);
  }
);
}

onBackButton() {
      this.router.navigateByUrl('/navbar');
    }


}