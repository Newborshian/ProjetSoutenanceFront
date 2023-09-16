import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router){ }

  get isLoggedIn(): boolean {
    return localStorage.getItem('login') === 'true';
  }

  logout() {
    localStorage.removeItem('login'),
    this.router.navigate([''])
   console.log("Deconnexion")
  }
}
