import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdateComponent } from './client-update.component';

describe('ClientUpdateComponent', () => {
  let component: ClientUpdateComponent;
  let fixture: ComponentFixture<ClientUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientUpdateComponent]
    });
    fixture = TestBed.createComponent(ClientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
