import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompteBancaire } from 'src/app/models/compte-bancaire-model';
import { CompteBancaireService } from 'src/app/services/comptes-bancaires.service';

@Component({
  selector: 'app-view-more-compte-courant',
  templateUrl: './view-more-compte-courant.component.html',
  styleUrls: ['./view-more-compte-courant.component.css']
})
export class ViewMoreCompteCourantComponent {

  compteBancaire$!: Observable<CompteBancaire>;
  compteCourantUptadeForm: FormGroup = this.fb.group({
    id: [''],
    numeroDeCompte: [''],
    typeDeCompte: [''],
    nameClient: [''],
    overDraft: ['', Validators.required],
    tauxInteret: [''],
    solde: ['', Validators.required],
  });
  constructor(private compteBancaireService: CompteBancaireService, 
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder){}

 
  numeroDeCompte!: string;
  nameClient!: string;
  typeDeCompte!: string;
  overDraft!: number;
  tauxInteret!: number;
  solde!: number;
  
  ngOnInit(): void {
    const compteBancaireId = +this.route.snapshot.params['id'];
    this.compteBancaire$ = this.compteBancaireService.getCompteCourantById(compteBancaireId);

    this.compteBancaire$.subscribe((compteBancaire) => {
      this.compteCourantUptadeForm.patchValue({
        id: compteBancaire.id,
        numeroDeCompte: compteBancaire.numerodecompte,
        typeDeCompte: compteBancaire.typeDeCompte,
        nameClient: compteBancaire.nameClient,
        tauxInteret: compteBancaire.tauxInteret
      });
    });
  }

  onClickButtonDeleteCompte(idCompte: number, solde: number){
    if(solde === 0){
    this.compteBancaire$ = this.compteBancaireService.deleteCompteCourant(idCompte)
    } 
    else {
      throw new Error('Vous ne pouvez pas supprimer ce compte, solde invalide')
    }  
  }
  onUpdateCompteCourant(compteBancaireId: number) {
    if(this.compteCourantUptadeForm.valid)
    console.log(compteBancaireId);
    
    this.router.navigateByUrl(`comptecourantupdate/${compteBancaireId}`);
  }
}
