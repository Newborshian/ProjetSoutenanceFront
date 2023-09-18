import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteBancaireListComponent } from './compte-bancaire-list.component';

describe('CompteBancaireListComponent', () => {
let component: CompteBancaireListComponent;
let fixture: ComponentFixture<CompteBancaireListComponent>;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [CompteBancaireListComponent]
  });
  fixture = TestBed.createComponent(CompteBancaireListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});
