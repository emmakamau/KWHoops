import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthenticationComponent } from './user-authentication.component';

describe('UserAuthenticationComponent', () => {
  let component: UserAuthenticationComponent;
  let fixture: ComponentFixture<UserAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
