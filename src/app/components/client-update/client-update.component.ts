import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
selector: 'app-client-update',
templateUrl: './client-update.component.html',
styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit{
clientId!: number;
currentClient!: Client ;
updatedClient!: Client;
showConfirmationMessage = false;
showErrorMessage = false;

clientUpdateForm: FormGroup = this.formBuilder.group({
lastname: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[A-Za-z\s\-]+$/)]],
firstname: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s\-]+$/)]],
address: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^\d+\s[A-Za-zÀ-ÿ\s]+$/)]],
city: ['', [Validators.required, Validators.maxLength(50),Validators.pattern(/^[A-Za-z\s\-]+$/)]],
zipcode: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(5), Validators.minLength(5)]],
phoneNumber: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^\d+$/)]],
idConseiller: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(1),Validators.maxLength(2)]],
});

constructor(private formBuilder: FormBuilder,
private clientService: ClientService,
private route: ActivatedRoute,
private router: Router,
private dialog : MatDialog) { }

ngOnInit() {
// Recupération de l'id en param URL
  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get('id');
    // console.log("id recupére en param >>>>" + id)
    if (id !== null) {
      this.clientId = parseInt(id);
    } else {
        setTimeout(() => {
          alert("Id incorrect");
        }, 5000);
    }
  });
// On recupère les info du client par son id
    this.clientService.getClientById(this.clientId).subscribe((res) => {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>> Mon client actuel " + res)
      this.currentClient = res

//  On ecrit les valeurs du client actuel dans le formulaire
    this.clientUpdateForm.patchValue({
      lastname: this.currentClient.lastname,
      firstname: this.currentClient.firstname,
      address: this.currentClient.address, 
    city: this.currentClient.city,
    zipcode: this.currentClient.zipcode,
    phoneNumber: this.currentClient.phoneNumber,
    idConseiller: this.currentClient.idConseiller,
    })
    ;}
  );
}


// Appel de update au click du boutton
onSubmitForm() {
// conversion des données pour avoir l'id
  this.updatedClient = {id: Number(this.clientId), lastname: this.clientUpdateForm.value.lastname, firstname: this.clientUpdateForm.value.firstname,
    address: this.clientUpdateForm.value.address, city: this.clientUpdateForm.value.city,zipcode: this.clientUpdateForm.value.zipcode,
    phoneNumber: this.clientUpdateForm.value.phoneNumber, idConseiller: this.clientUpdateForm.value. idConseiller}

    this.clientService.updateClient(this.updatedClient).subscribe(
  (response) => {
    console.log("Client modifié avec succès !", response);
    this.showConfirmationMessage = true;
  },
  (error) => {
    this.showErrorMessage = true;
    console.error("Erreur lors de l'enregistrement du client :", error);
  }
);
}

onBackButton() {
      this.router.navigateByUrl('/listClient');
    }
}