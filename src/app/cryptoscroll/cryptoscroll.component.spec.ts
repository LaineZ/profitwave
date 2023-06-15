import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoscrollComponent } from './cryptoscroll.component';

describe('CryptoscrollComponent', () => {
  let component: CryptoscrollComponent;
  let fixture: ComponentFixture<CryptoscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoscrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
