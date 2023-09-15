import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loansimulation',
  templateUrl: './loansimulation.component.html',
  styleUrls: ['./loansimulation.component.css']
})
export class LoansimulationComponent implements OnInit {

  public loanSimulation = false;
  
  constructor(){ }

  ngOnInit(): void {
      this.loanSimulation = true;
  }

}
