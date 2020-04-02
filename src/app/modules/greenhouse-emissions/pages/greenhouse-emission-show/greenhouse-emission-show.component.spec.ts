import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseEmissionShowComponent } from './greenhouse-emission-show.component';

describe('GreenhouseEmissionShowComponent', () => {
  let component: GreenhouseEmissionShowComponent;
  let fixture: ComponentFixture<GreenhouseEmissionShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseEmissionShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseEmissionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
