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
  currentClient!: Client;
  updatedClient!: Client;

  clientUpdateForm: FormGroup = this.formBuilder.group({
    lastname: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[A-Za-z\s\-]+$/)]],
    firstname: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s\-]+$/)]],
    address: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^\d+\s[a-zA-Z\s]+$/)]],
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

      this.route.paramMap.subscribe((params: ParamMap) => {
        const id = params.get('id');
        if (id !== null) {
          this.clientId = parseInt(id);
        } else {
            setTimeout(() => {
              alert("Id incorrect");
            }, 5000);
        }
      });

        this.clientService.getClientById(this.clientId).subscribe((res) => {
          console.log(res)
          this.currentClient = res

        this.clientUpdateForm.patchValue({
          title: this.currentClient.lastname,
          link: this.currentClient.firstname,
        });}
      
      );
    }

       

    onSubmitForm() {
      this.clientService.updateClient(this.clientUpdateForm.value).subscribe(
      (response) => {
        console.log("Client modifié avec succès !", response);
        this.router.navigateByUrl('/navbar');
        alert("client modifié avec succés"+ response);
      },
      (error) => {
        console.error("Erreur lors de l'enregistrement du client :", error);
      }
    );
    }
  
    onBackButton() {
          this.router.navigateByUrl('/navbar');
        }
}

