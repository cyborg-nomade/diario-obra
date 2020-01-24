import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasFuturasComponent } from './obras-futuras.component';

describe('ObrasFuturasComponent', () => {
  let component: ObrasFuturasComponent;
  let fixture: ComponentFixture<ObrasFuturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasFuturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasFuturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
