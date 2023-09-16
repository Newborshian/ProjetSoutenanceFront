import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewClientFormComponent } from './components/new-client-form/new-client-form.component';
import { ClientlistComponent } from './components/clientlist/clientlist.component';

import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { CompteBancaireListComponent } from './components/compte-bancaire-list/compte-bancaire-list.component';
import { ViewMoreCompteEpargneComponent } from './components/view-more-compte-epargne/view-more-compte-epargne.component';
import { ViewMoreCompteCourantComponent } from './components/view-more-compte-courant/view-more-compte-courant.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'newClient', component: NewClientFormComponent},
  {path: 'listClient', component: ClientlistComponent},
  {path: 'updateClient/:id', component: ClientUpdateComponent},
  {path: 'comptesbancaires', component: CompteBancaireListComponent},
  {path: 'comptesepargnes/:id', component: ViewMoreCompteEpargneComponent},
  {path: 'comptescourants/:id', component: ViewMoreCompteCourantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
