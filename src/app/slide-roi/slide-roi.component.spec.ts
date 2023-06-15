import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideRoiComponent } from './slide-roi.component';

describe('SlideRoiComponent', () => {
  let component: SlideRoiComponent;
  let fixture: ComponentFixture<SlideRoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideRoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideRoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
