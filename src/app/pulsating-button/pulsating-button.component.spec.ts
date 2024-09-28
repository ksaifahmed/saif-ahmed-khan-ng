import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsatingButtonComponent } from './pulsating-button.component';

describe('PulsatingButtonComponent', () => {
  let component: PulsatingButtonComponent;
  let fixture: ComponentFixture<PulsatingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PulsatingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulsatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
