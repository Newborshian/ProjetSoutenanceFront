import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewClientFormComponent } from './components/new-client-form/new-client-form.component';
import { HeaderComponent } from './components/header/header.component';
import { CookieService } from 'ngx-cookie-service';
import {LoansimulationComponent} from './components/loansimulation/loansimulation.component';
import { ClientlistComponent } from './components/clientlist/clientlist.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalNewClientAddComponent } from './components/modal-new-client-add/modal-new-client-add.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { CompteBancaireComponent } from './components/compte-bancaire/compte-bancaire.component';
import { CompteBancaireListComponent } from './components/compte-bancaire-list/compte-bancaire-list.component';
import { ViewMoreCompteCourantComponent } from './components/view-more-compte-courant/view-more-compte-courant.component';
import { ViewMoreCompteEpargneComponent } from './components/view-more-compte-epargne/view-more-compte-epargne.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComptecourantUpdateComponent } from './components/comptecourant-update/comptecourant-update.component';
import { CompteepargneUpdateComponent } from './components/compteepargne-update/compteepargne-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NewClientFormComponent,
    HeaderComponent,
    LoansimulationComponent,
    ClientlistComponent,
    ModalNewClientAddComponent,
    ClientUpdateComponent,
    ClientlistComponent,
    CompteBancaireComponent,
    CompteBancaireListComponent,
    ViewMoreCompteCourantComponent,
    ViewMoreCompteEpargneComponent,
    HomePageComponent,
    ComptecourantUpdateComponent,
    CompteepargneUpdateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
