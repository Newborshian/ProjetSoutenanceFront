import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompteBancaire } from 'src/app/models/compte-bancaire-model';
import { CompteBancaireService } from 'src/app/services/comptes-bancaires.service';

@Component({
  selector: 'app-newcomptecourant',
  templateUrl: './newcomptecourant.component.html',
  styleUrls: ['./newcomptecourant.component.css']
})
export class NewcomptecourantComponent {
  client$!: Observable<CompteBancaire>;
  compteCourantCreateForm: FormGroup = this.fb.group({
    numerodecompte: ['', Validators.required],
    isEpargne: [false],
    overDraft: ['', Validators.required],
    tauxInteret: [0],
    card: ['', Validators.required],
    solde: ['', Validators.required],
    createdat: ['', Validators.required],
    id_client: ['']
  });


  infoCreated = false;
  errorCreated = false;
  
  constructor(
    private compteBancaireService: CompteBancaireService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const compteBancaireId = +params['id'];
      this.client$ = this.compteBancaireService.getCompteCourantById(compteBancaireId);
      this.compteCourantCreateForm.patchValue({
        id_client: compteBancaireId
      });
    });
  }

  addCompteCourant(compteCourant: FormGroup) {
    this.compteBancaireService.createCompteEpargne(compteCourant.value).subscribe(
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
  
  onBackButton() {
      // Recupération de l'id en param URL
  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get('id');
    this.router.navigateByUrl(`/comptesbancaires/${id}`);
  });
  }
  
}
