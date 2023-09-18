import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-loansimulation',
templateUrl: './loansimulation.component.html',
styleUrls: ['./loansimulation.component.css']
})
export class LoansimulationComponent implements OnInit {

public loanSimulation = false;
loanForm!: FormGroup;
showResult: boolean = false;
totalAmount: number = 0;
monthlyPayment: number = 0;

constructor(private formBuilder: FormBuilder) { }

ngOnInit(): void {
  this.loanForm = this.formBuilder.group({
    loanAmount: ['', Validators.required],
    interestRate: ['', Validators.required],
    loanDuration: ['', Validators.required],
    insuranceRate: ['', Validators.required]
  });
  this.loanSimulation = true;
}

onSubmit(): void {
  if (this.loanForm.valid) {
    const loanAmount = this.loanForm.get('loanAmount')?.value;
    const interestRate = this.loanForm.get('interestRate')?.value;
    const loanDuration = this.loanForm.get('loanDuration')?.value;
    const insuranceRate = this.loanForm.get('insuranceRate')?.value;
  
    if (loanAmount && interestRate && loanDuration && insuranceRate) {
      // Calcul des intérêts
      const monthlyInterestRate = (interestRate / 100) / 12;
      const numberOfPayments = loanDuration * 12;

      // Calcul des mensualités
      const monthlyPayment = (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      // Calcul du montant total dû
      const totalAmount = monthlyPayment * numberOfPayments;

      // Ajout de l'assurance
      const insuranceAmount = (loanAmount * (insuranceRate / 100)) * loanDuration;
      const totalAmountWithInsurance = totalAmount + insuranceAmount;

      this.totalAmount = parseFloat(totalAmountWithInsurance.toFixed(2));
      this.monthlyPayment = parseFloat(monthlyPayment.toFixed(2));
      this.showResult = true;
    }
  }
}
}
