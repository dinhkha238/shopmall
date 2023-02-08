import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouserListComponent } from './trouser-list.component';

describe('TrouserListComponent', () => {
  let component: TrouserListComponent;
  let fixture: ComponentFixture<TrouserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
