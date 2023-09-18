import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompteBancaire } from 'src/app/models/compte-bancaire-model';
import { CompteBancaireService } from 'src/app/services/comptes-bancaires.service';

@Component({
  selector: 'app-view-more-compte-epargne',
  templateUrl: './view-more-compte-epargne.component.html',
  styleUrls: ['./view-more-compte-epargne.component.css']
})
export class ViewMoreCompteEpargneComponent implements OnInit{
   
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

  showDeleteConfirmation: boolean = false;

  compteToDelete!: CompteBancaire;

  public compteDeleted = false;

  public soldeDifferentOf0 = false;


  constructor(private compteBancaireService: CompteBancaireService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder){}

  numeroDeCompte!: string
  nameClient!: string
  typeDeCompte!: string
  overDraft!: number
  tauxInteret!: number
  solde!: number

  
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

  onClickButtonDeleteCompte(idCompte: number, solde: number){
  if(solde === 0){
  this.compteBancaire$ = this.compteBancaireService.deleteCompteEpargne(idCompte)
  } else {
      throw new Error('Vous ne pouvez pas supprimer ce compte, solde invalide')
    }  
  }
  onUpdateCompteEpargne(compteBancaireId: number) {
    console.log(compteBancaireId);
    
    this.router.navigateByUrl(`compteepargneupdate/${compteBancaireId}`);
  }

  deleteCompte(compte: CompteBancaire) {
    this.compteToDelete = compte;
    this.showDeleteConfirmation = true;
  }

  confirmDeleteCompte() {
   
    // Vérifiez ici si les comptes bancaires du client sont vides, sinon, affichez un message d'erreur
    // Si les comptes sont vides, supprimez le client
    this.compteBancaireService.getCompteEpargneById(this.compteToDelete!.id).subscribe((compteEpargneSolde) => {
       
        if (compteEpargneSolde?.solde === 0 || compteEpargneSolde?.solde === null) 
             {
          console.log(">>>>>>>>>>>>>>>>> debut du delete :" + this.compteToDelete!.id)
          this.compteBancaireService.deleteCompteEpargne(this.compteToDelete.id).subscribe((data) => {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>> Client supprimé ")
          });

          this.compteDeleted = true;
        } else {
          console.error("Le solde des comptes du client doit être égal à 0 avant de pouvoir être supprimé");
          this.soldeDifferentOf0 = true;
        }
        this.showDeleteConfirmation = false; // Masquer la boîte de dialogue après la suppression
      })
    }
      

      cancelDelete() {
        this.showDeleteConfirmation = false;
      }
}
