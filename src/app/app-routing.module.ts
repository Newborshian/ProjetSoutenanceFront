import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewClientFormComponent } from './components/new-client-form/new-client-form.component';
import { ClientlistComponent } from './components/clientlist/clientlist.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { CompteBancaireListComponent } from './components/compte-bancaire-list/compte-bancaire-list.component';
import { ViewMoreCompteEpargneComponent } from './components/view-more-compte-epargne/view-more-compte-epargne.component';
import { ViewMoreCompteCourantComponent } from './components/view-more-compte-courant/view-more-compte-courant.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComptecourantUpdateComponent } from './components/comptecourant-update/comptecourant-update.component';
import { CompteepargneUpdateComponent } from './components/compteepargne-update/compteepargne-update.component';
import { LoansimulationComponent } from './components/loansimulation/loansimulation.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'home', component: HomePageComponent},
  {path: 'newClient', component: NewClientFormComponent},
  {path: 'listClient', component: ClientlistComponent},
  {path: 'loansimulation', component: LoansimulationComponent},
  {path: 'updateClient/:id', component: ClientUpdateComponent},
  {path: 'comptesbancaires/:id', component: CompteBancaireListComponent},
  {path: 'comptesepargnes/:id', component: ViewMoreCompteEpargneComponent},
  {path: 'comptescourants/:id', component: ViewMoreCompteCourantComponent},
  {path: 'comptecourantupdate/:id', component: ComptecourantUpdateComponent},
  {path: 'compteepargneupdate/:id', component: CompteepargneUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
