import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../services/conseiller.service';
import { Conseiller } from '../models/conseiller.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  conseillerLogger : Conseiller | null = null;

  constructor(private conseillerService: ConseillerService
   ) { }

   ngOnInit(): void {
    this.conseillerService.conseiller$.subscribe((res) =>{
      console.log(res);
      
      this.conseillerLogger = res;
    })       
   }
  
   
}
