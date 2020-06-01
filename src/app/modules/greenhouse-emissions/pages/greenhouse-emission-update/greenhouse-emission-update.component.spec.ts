import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseEmissionUpdateComponent } from './greenhouse-emission-update.component';

describe('GreenhouseEmissionUpdateComponent', () => {
  let component: GreenhouseEmissionUpdateComponent;
  let fixture: ComponentFixture<GreenhouseEmissionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseEmissionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseEmissionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
