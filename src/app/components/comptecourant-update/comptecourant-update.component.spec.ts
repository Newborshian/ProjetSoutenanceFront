import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptecourantUpdateComponent } from './comptecourant-update.component';

describe('ComptecourantUpdateComponent', () => {
  let component: ComptecourantUpdateComponent;
  let fixture: ComponentFixture<ComptecourantUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComptecourantUpdateComponent]
    });
    fixture = TestBed.createComponent(ComptecourantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
