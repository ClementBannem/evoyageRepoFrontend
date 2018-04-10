import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceHoteliereComponent } from './residence-hoteliere.component';

describe('ResidenceHoteliereComponent', () => {
  let component: ResidenceHoteliereComponent;
  let fixture: ComponentFixture<ResidenceHoteliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenceHoteliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceHoteliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
