import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteepargneUpdateComponent } from './compteepargne-update.component';

describe('CompteepargneUpdateComponent', () => {
let component: CompteepargneUpdateComponent;
let fixture: ComponentFixture<CompteepargneUpdateComponent>;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [CompteepargneUpdateComponent]
  });
  fixture = TestBed.createComponent(CompteepargneUpdateComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});
