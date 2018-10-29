import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotitionDetailsComponent } from './compotition-details.component';

describe('CompotitionDetailsComponent', () => {
  let component: CompotitionDetailsComponent;
  let fixture: ComponentFixture<CompotitionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompotitionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompotitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
