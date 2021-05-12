import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionBarComponent } from './decision-bar.component';

describe('DecisionBarComponent', () => {
  let component: DecisionBarComponent;
  let fixture: ComponentFixture<DecisionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
