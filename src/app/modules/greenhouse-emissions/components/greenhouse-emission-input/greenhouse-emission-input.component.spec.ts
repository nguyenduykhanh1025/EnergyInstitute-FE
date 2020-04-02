import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseEmissionInputComponent } from './greenhouse-emission-input.component';

describe('GreenhouseEmissionInputComponent', () => {
  let component: GreenhouseEmissionInputComponent;
  let fixture: ComponentFixture<GreenhouseEmissionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseEmissionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseEmissionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
