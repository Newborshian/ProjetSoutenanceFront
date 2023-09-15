import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public login = true;

  constructor(private router: Router){ }

  logout() {
    this.login = false;
    this.router.navigate([''])
   console.log("Deconnexion")
  }
}
