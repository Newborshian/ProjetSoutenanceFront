import { Component } from '@angular/core';
import { ConseillerService } from '../services/conseiller.service';
import { Conseiller } from '../models/conseiller.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private conseillerService: ConseillerService
   ) { }

   conseillerLogger! : Conseiller;

   
}
