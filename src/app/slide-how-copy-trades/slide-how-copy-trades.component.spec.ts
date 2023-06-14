import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideHowCopyTradesComponent } from './slide-how-copy-trades.component';

describe('SlideHowCopyTradesComponent', () => {
  let component: SlideHowCopyTradesComponent;
  let fixture: ComponentFixture<SlideHowCopyTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideHowCopyTradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideHowCopyTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
