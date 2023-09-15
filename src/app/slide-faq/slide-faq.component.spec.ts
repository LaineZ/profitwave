import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFaqComponent } from './slide-faq.component';

describe('SlideFaqComponent', () => {
  let component: SlideFaqComponent;
  let fixture: ComponentFixture<SlideFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
