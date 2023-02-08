import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quan3Component } from './quan3.component';

describe('Quan3Component', () => {
  let component: Quan3Component;
  let fixture: ComponentFixture<Quan3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quan3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
