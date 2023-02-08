import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quan1Component } from './quan1.component';

describe('Quan1Component', () => {
  let component: Quan1Component;
  let fixture: ComponentFixture<Quan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quan1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
