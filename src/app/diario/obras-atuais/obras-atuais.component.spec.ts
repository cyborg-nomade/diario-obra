import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasAtuaisComponent } from './obras-atuais.component';

describe('ObrasAtuaisComponent', () => {
  let component: ObrasAtuaisComponent;
  let fixture: ComponentFixture<ObrasAtuaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasAtuaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasAtuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
