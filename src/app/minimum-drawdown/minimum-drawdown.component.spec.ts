import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumDrawdownComponent } from './minimum-drawdown.component';

describe('MinimumDrawdownComponent', () => {
  let component: MinimumDrawdownComponent;
  let fixture: ComponentFixture<MinimumDrawdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimumDrawdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimumDrawdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
