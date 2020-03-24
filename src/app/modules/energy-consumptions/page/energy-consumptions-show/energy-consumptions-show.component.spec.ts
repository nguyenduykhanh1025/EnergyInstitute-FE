import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyConsumptionsShowComponent } from './energy-consumptions-show.component';

describe('EnergyConsumptionsShowComponent', () => {
  let component: EnergyConsumptionsShowComponent;
  let fixture: ComponentFixture<EnergyConsumptionsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyConsumptionsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyConsumptionsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
