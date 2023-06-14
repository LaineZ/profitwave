import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFollowComponent } from './slide-follow.component';

describe('SlideFollowComponent', () => {
  let component: SlideFollowComponent;
  let fixture: ComponentFixture<SlideFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
