import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasConcluidasComponent } from './obras-concluidas.component';

describe('ObrasConcluidasComponent', () => {
  let component: ObrasConcluidasComponent;
  let fixture: ComponentFixture<ObrasConcluidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasConcluidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasConcluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
