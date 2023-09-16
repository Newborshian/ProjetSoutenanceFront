import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreCompteCourantComponent } from './view-more-compte-courant.component';

describe('ViewMoreCompteCourantComponent', () => {
  let component: ViewMoreCompteCourantComponent;
  let fixture: ComponentFixture<ViewMoreCompteCourantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMoreCompteCourantComponent]
    });
    fixture = TestBed.createComponent(ViewMoreCompteCourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
