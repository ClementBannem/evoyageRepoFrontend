import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocarComponent } from './autocar.component';

describe('AutocarComponent', () => {
  let component: AutocarComponent;
  let fixture: ComponentFixture<AutocarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
