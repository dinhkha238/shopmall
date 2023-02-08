import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quan2Component } from './quan2.component';

describe('Quan2Component', () => {
  let component: Quan2Component;
  let fixture: ComponentFixture<Quan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quan2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
