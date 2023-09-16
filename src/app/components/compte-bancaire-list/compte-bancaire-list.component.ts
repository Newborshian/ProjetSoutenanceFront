import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompteBancaire } from 'src/app/models/compte-bancaire-model';
import { CompteBancaireService } from 'src/app/services/comptes-bancaires.service';

@Component({
  selector: 'app-compte-bancaire-list',
  templateUrl: './compte-bancaire-list.component.html',
  styleUrls: ['./compte-bancaire-list.component.css']
})
export class CompteBancaireListComponent {

  comptesBancaires$!: Observable<CompteBancaire[]>;
 

  constructor(private compteBancaireService: CompteBancaireService,private route: ActivatedRoute){}

  ngOnInit(): void {

    const clientId = +this.route.snapshot.params['id']

    this.comptesBancaires$ = this.compteBancaireService.getComptesByIdClient(clientId);

    
    

    
  }

}
