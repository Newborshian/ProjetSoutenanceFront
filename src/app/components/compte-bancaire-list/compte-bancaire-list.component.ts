import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isFormCompteCourant = false;
  isFormCompteEpargne = false;
  clientId: number;

  constructor(private compteBancaireService: CompteBancaireService, private route: ActivatedRoute, private router: Router) {
    this.clientId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.comptesBancaires$ = this.compteBancaireService.getComptesByIdClient(this.clientId);
  }

  onFormAddCompteCourant() {
    this.isFormCompteCourant = true;
    this.isFormCompteEpargne = false;
    this.router.navigate(['createcomptecourant', this.clientId]);
  }

  onFormAddCompteEpargne() {
    this.isFormCompteEpargne = true;
    this.isFormCompteCourant = false;
    this.router.navigate(['createcompteepargne', this.clientId]);
  }

  onBackButton() {
    this.router.navigateByUrl('/listClient');
  }
}
