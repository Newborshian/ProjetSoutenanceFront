import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientListComponent } from './view-client-list.component';

describe('ViewClientListComponent', () => {
  let component: ViewClientListComponent;
  let fixture: ComponentFixture<ViewClientListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewClientListComponent]
    });
    fixture = TestBed.createComponent(ViewClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
