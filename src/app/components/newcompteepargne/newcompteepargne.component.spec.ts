import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompteepargneComponent } from './newcompteepargne.component';

describe('NewcompteepargneComponent', () => {
  let component: NewcompteepargneComponent;
  let fixture: ComponentFixture<NewcompteepargneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcompteepargneComponent]
    });
    fixture = TestBed.createComponent(NewcompteepargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
