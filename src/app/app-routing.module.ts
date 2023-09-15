import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { NewClientFormComponent } from './components/new-client-form/new-client-form.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'newClient', component: NewClientFormComponent},
  {path: 'updateClient/:id', component: ClientUpdateComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
