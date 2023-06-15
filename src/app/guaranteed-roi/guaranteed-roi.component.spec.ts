import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteedRoiComponent } from './guaranteed-roi.component';

describe('GuaranteedRoiComponent', () => {
  let component: GuaranteedRoiComponent;
  let fixture: ComponentFixture<GuaranteedRoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuaranteedRoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuaranteedRoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
