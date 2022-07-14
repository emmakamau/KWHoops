import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegeterianComponent } from './non-vegeterian.component';

describe('NonVegeterianComponent', () => {
  let component: NonVegeterianComponent;
  let fixture: ComponentFixture<NonVegeterianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonVegeterianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVegeterianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
