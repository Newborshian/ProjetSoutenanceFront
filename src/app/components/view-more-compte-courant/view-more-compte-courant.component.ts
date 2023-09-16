import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private compteBancaireService: CompteBancaireService, private route: ActivatedRoute){}

 
  numeroDeCompte!: string
  nameClient!: string
  typeDeCompte!: string
  overDraft!: number
  tauxInteret!: number
  solde!: number

  

  ngOnInit(): void {

    

    const compteBancaireId = +this.route.snapshot.params['id'];

  
    this.compteBancaire$ = this.compteBancaireService.getCompteCourantById(compteBancaireId);

    
    

    
  }

 

 

  onClickButtonDeleteCompte(idCompte: number, solde: number){

      if(solde === 0){
    this.compteBancaire$ = this.compteBancaireService.deleteCompteCourant(idCompte)
      }
      else {
        throw new Error('Vous ne pouvez pas supprimer ce compte, solde invalide')
      }  
  }


}
