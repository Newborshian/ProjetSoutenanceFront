import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomptecourantComponent } from './newcomptecourant.component';

describe('NewcomptecourantComponent', () => {
  let component: NewcomptecourantComponent;
  let fixture: ComponentFixture<NewcomptecourantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcomptecourantComponent]
    });
    fixture = TestBed.createComponent(NewcomptecourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
