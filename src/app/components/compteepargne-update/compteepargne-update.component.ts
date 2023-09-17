import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompteBancaire } from 'src/app/models/compte-bancaire-model';
import { CompteBancaireService } from 'src/app/services/comptes-bancaires.service';

@Component({
  selector: 'app-compteepargne-update',
  templateUrl: './compteepargne-update.component.html',
  styleUrls: ['./compteepargne-update.component.css']
})
export class CompteepargneUpdateComponent implements OnInit{
  compteBancaire$!: Observable<CompteBancaire>;
  compteEpargneUptadeForm: FormGroup = this.fb.group({
    id: [''],
    numeroDeCompte: [''],
    typeDeCompte: [''],
    nameClient: [''],
    overDraft: [''],
    tauxInteret: ['', Validators.required],
    solde: ['', Validators.required],
  });

  constructor(private compteBancaireService: CompteBancaireService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder){}

  ngOnInit(): void {
    const compteBancaireId = +this.route.snapshot.params['id'];
    this.compteBancaire$ = this.compteBancaireService.getCompteEpargneById(compteBancaireId);

    this.compteBancaire$.subscribe((compteBancaire) => {
      this.compteEpargneUptadeForm.patchValue({
        id: compteBancaire.id,
        numeroDeCompte: compteBancaire.numerodecompte,
        typeDeCompte: compteBancaire.typeDeCompte,
        nameClient: compteBancaire.nameClient,
        overDraft: compteBancaire.overDraft
      });
    });    
  }
  updateCompte() {
    if (this.compteEpargneUptadeForm.valid) {
      const updatedCompte: CompteBancaire = this.compteEpargneUptadeForm.value;
      this.compteBancaireService.updateCompteEpargne(updatedCompte).subscribe(
        (res) => {
          console.log("Compte mis à jour avec succès", res);
        },
        (error) => {
          console.error("Erreur lors de la mise à jour du compte", error);
        }
      );
    } else {
      console.error("Formulaire invalide. Veuillez corriger les erreurs");
    }
  }
}

