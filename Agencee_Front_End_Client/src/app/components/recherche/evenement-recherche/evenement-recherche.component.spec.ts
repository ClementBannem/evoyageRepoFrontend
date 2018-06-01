import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementRechercheComponent } from './evenement-recherche.component';

describe('EvenementRechercheComponent', () => {
  let component: EvenementRechercheComponent;
  let fixture: ComponentFixture<EvenementRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
