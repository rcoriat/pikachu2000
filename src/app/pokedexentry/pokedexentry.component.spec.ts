import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexentryComponent } from './pokedexentry.component';

describe('PokedexentryComponent', () => {
  let component: PokedexentryComponent;
  let fixture: ComponentFixture<PokedexentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
