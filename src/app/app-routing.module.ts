import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { NewClientFormComponent } from './components/new-client-form/new-client-form.component';
import { ClientlistComponent } from './components/clientlist/clientlist.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'newClient', component: NewClientFormComponent},
  {path: 'listClient', component: ClientlistComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
