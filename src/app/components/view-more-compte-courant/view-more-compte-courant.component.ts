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

  showDeleteConfirmation: boolean = false;

  compteToDelete!: CompteBancaire;

  public compteDeleted = false;

  public soldeDifferentOf0 = false;


 
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
    
    this.compteBancaire$ = this.compteBancaireService.deleteCompteCourant(idCompte)
    this.showDeleteConfirmation = true;
     
  }
  onUpdateCompteCourant(compteBancaireId: number) {
    if(this.compteCourantUptadeForm.valid)
    console.log(compteBancaireId);
    
    this.router.navigateByUrl(`comptecourantupdate/${compteBancaireId}`);
  }

  deleteCompte(compte: CompteBancaire) {
    this.compteToDelete = compte;
    this.showDeleteConfirmation = true;
  }

  confirmDeleteCompte() {
   
    // Vérifiez ici si les comptes bancaires du client sont vides, sinon, affichez un message d'erreur
    // Si les comptes sont vides, supprimez le client
    this.compteBancaireService.getCompteCourantById(this.compteToDelete!.id).subscribe((compteCourantSolde) => {
       
        if (compteCourantSolde?.solde === 0 || compteCourantSolde?.solde === null) 
             {
          console.log(">>>>>>>>>>>>>>>>> debut du delete :" + this.compteToDelete!.id)
          this.compteBancaireService.deleteCompteCourant(this.compteToDelete.id).subscribe((data) => {
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
