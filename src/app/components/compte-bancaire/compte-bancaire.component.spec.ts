import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteBancaireComponent } from './compte-bancaire.component';

describe('CompteBancaireComponent', () => {
let component: CompteBancaireComponent;
let fixture: ComponentFixture<CompteBancaireComponent>;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [CompteBancaireComponent]
  });
  fixture = TestBed.createComponent(CompteBancaireComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});
