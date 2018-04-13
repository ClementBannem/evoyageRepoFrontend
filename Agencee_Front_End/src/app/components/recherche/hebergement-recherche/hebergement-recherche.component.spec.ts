import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementRechercheComponent } from './hebergement-recherche.component';

describe('HebergementRechercheComponent', () => {
  let component: HebergementRechercheComponent;
  let fixture: ComponentFixture<HebergementRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HebergementRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HebergementRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
