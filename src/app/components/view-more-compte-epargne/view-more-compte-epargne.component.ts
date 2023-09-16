import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompteBancaire } from 'src/app/models/compte-bancaire-model';
import { CompteBancaireService } from 'src/app/services/comptes-bancaires.service';

@Component({
  selector: 'app-view-more-compte-epargne',
  templateUrl: './view-more-compte-epargne.component.html',
  styleUrls: ['./view-more-compte-epargne.component.css']
})
export class ViewMoreCompteEpargneComponent {

  

  
 
   
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

  
    this.compteBancaire$ = this.compteBancaireService.getCompteEpargneById(compteBancaireId);

   

}

onClickButtonDeleteCompte(idCompte: number, solde: number){

  if(solde === 0){
this.compteBancaire$ = this.compteBancaireService.deleteCompteEpargne(idCompte)
  }
  else {
    throw new Error('Vous ne pouvez pas supprimer ce compte, solde invalide')
  }  
}
}
