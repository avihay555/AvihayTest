import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotitionRegisterComponent } from './compotition-register.component';

describe('CompotitionRegisterComponent', () => {
  let component: CompotitionRegisterComponent;
  let fixture: ComponentFixture<CompotitionRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompotitionRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompotitionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
