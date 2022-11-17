import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditComponent } from './cliente-edit.component';

describe('ClienteEditComponent', () => {
  let component: ClienteEditComponent;
  let fixture: ComponentFixture<ClienteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
