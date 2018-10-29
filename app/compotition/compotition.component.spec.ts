import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotitionComponent } from './compotition.component';

describe('CompotitionComponent', () => {
  let component: CompotitionComponent;
  let fixture: ComponentFixture<CompotitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompotitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompotitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
