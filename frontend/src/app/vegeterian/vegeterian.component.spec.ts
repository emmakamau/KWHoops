import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeterianComponent } from './vegeterian.component';

describe('VegeterianComponent', () => {
  let component: VegeterianComponent;
  let fixture: ComponentFixture<VegeterianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegeterianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegeterianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
