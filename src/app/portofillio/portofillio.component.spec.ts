import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofillioComponent } from './portofillio.component';

describe('PortofillioComponent', () => {
  let component: PortofillioComponent;
  let fixture: ComponentFixture<PortofillioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortofillioComponent]
    });
    fixture = TestBed.createComponent(PortofillioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
