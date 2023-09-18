import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansimulationComponent } from './loansimulation.component';

describe('LoansimulationComponent', () => {
let component: LoansimulationComponent;
let fixture: ComponentFixture<LoansimulationComponent>;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [LoansimulationComponent]
  });
  fixture = TestBed.createComponent(LoansimulationComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});
