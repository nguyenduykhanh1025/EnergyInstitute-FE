import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyConsumptionsCreateComponent } from './energy-consumptions-create.component';

describe('EnergyConsumptionsCreateComponent', () => {
  let component: EnergyConsumptionsCreateComponent;
  let fixture: ComponentFixture<EnergyConsumptionsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyConsumptionsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyConsumptionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
