import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthbtComponent } from './authbt.component';

describe('AuthbtComponent', () => {
  let component: AuthbtComponent;
  let fixture: ComponentFixture<AuthbtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthbtComponent]
    });
    fixture = TestBed.createComponent(AuthbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
