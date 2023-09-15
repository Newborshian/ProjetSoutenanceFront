import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewClientAddComponent } from './modal-new-client-add.component';

describe('ModalNewClientAddComponent', () => {
  let component: ModalNewClientAddComponent;
  let fixture: ComponentFixture<ModalNewClientAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNewClientAddComponent]
    });
    fixture = TestBed.createComponent(ModalNewClientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
