import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSubscribeComponent } from './slide-subscribe.component';

describe('SlideSubscribeComponent', () => {
  let component: SlideSubscribeComponent;
  let fixture: ComponentFixture<SlideSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
