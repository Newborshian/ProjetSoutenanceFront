import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BanckAccountDto } from 'src/app/dtos/BanckAccountDto';
import { CompteBancaire } from 'src/app/models/compte-bancaire-model';
import { CompteBancaireService } from 'src/app/services/comptes-bancaires.service';

@Component({
  selector: 'app-newcompteepargne',
  templateUrl: './newcompteepargne.component.html',
  styleUrls: ['./newcompteepargne.component.css']
})
export class NewcompteepargneComponent implements OnInit {


  infoCreated = false;
  errorCreated = false;
  client$!: Observable<CompteBancaire>;
  compteEpargneCreateForm: FormGroup = this.fb.group({
    numerodecompte: ['', Validators.required],
    isEpargne: [true],
    overDraft: [0],
    tauxInteret: ['', Validators.required],
    card: ['', Validators.required],
    solde: ['', Validators.required],
    createdat: ['', Validators.required],
    id_client: ['']
  });

  constructor(
    private compteBancaireService: CompteBancaireService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const compteBancaireId = +params['id'];
      this.client$ = this.compteBancaireService.getCompteEpargneById(compteBancaireId);
      this.compteEpargneCreateForm.patchValue({
        id_client: compteBancaireId
      });
    });
  }

  addCompteEpargne(compteEpargne: FormGroup){
    this.compteBancaireService.createCompteEpargne(compteEpargne.value).subscribe(
      (res) => {
        console.log("Compte courant créé :", res);
        this.infoCreated = true;
      },
      (error) => {
        console.error("Un problème est survenu lors de la création du compte", error);
        this.errorCreated = true;
      }
    );
  }
}
