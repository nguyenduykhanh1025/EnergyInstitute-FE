import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyConsumptionsUpdateComponent } from './energy-consumptions-update.component';

describe('EnergyConsumptionsUpdateComponent', () => {
  let component: EnergyConsumptionsUpdateComponent;
  let fixture: ComponentFixture<EnergyConsumptionsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyConsumptionsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyConsumptionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
