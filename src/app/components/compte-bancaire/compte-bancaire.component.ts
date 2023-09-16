import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { CompteBancaire } from 'src/app/models/compte-bancaire-model';
import { CompteBancaireService } from 'src/app/services/comptes-bancaires.service';

@Component({
  selector: 'app-compte-bancaire',
  templateUrl: './compte-bancaire.component.html',
  styleUrls: ['./compte-bancaire.component.css']
})
export class CompteBancaireComponent {

  @Input() compteBancaire!: CompteBancaire;



  constructor(private compteBancaireService: CompteBancaireService, private route: Router, private activeroute: ActivatedRoute){}

 

  ngOnInit(): void {

   

  }

  viewMoreInfos(){
    if(this.compteBancaire.typeDeCompte==='COURANT'){

    this.route.navigateByUrl(`comptescourants/${this.compteBancaire.id}`);
  }
  if(this.compteBancaire.typeDeCompte==='EPARGNE'){
    this.route.navigateByUrl(`comptesepargnes/${this.compteBancaire.id}`);
  }
}

}
