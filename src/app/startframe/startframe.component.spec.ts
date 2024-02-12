import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartframeComponent } from './startframe.component';

describe('StartframeComponent', () => {
  let component: StartframeComponent;
  let fixture: ComponentFixture<StartframeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartframeComponent]
    });
    fixture = TestBed.createComponent(StartframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
