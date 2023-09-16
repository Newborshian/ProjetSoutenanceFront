import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreCompteEpargneComponent } from './view-more-compte-epargne.component';

describe('ViewMoreCompteEpargneComponent', () => {
  let component: ViewMoreCompteEpargneComponent;
  let fixture: ComponentFixture<ViewMoreCompteEpargneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMoreCompteEpargneComponent]
    });
    fixture = TestBed.createComponent(ViewMoreCompteEpargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
