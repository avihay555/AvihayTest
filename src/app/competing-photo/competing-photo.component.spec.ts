import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetingPhotoComponent } from './competing-photo.component';

describe('CompetingPhotoComponent', () => {
  let component: CompetingPhotoComponent;
  let fixture: ComponentFixture<CompetingPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetingPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
