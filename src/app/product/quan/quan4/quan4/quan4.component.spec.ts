import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quan4Component } from './quan4.component';

describe('Quan4Component', () => {
  let component: Quan4Component;
  let fixture: ComponentFixture<Quan4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quan4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
