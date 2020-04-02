import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseEmissionCreateComponent } from './greenhouse-emission-create.component';

describe('GreenhouseEmissionCreateComponent', () => {
  let component: GreenhouseEmissionCreateComponent;
  let fixture: ComponentFixture<GreenhouseEmissionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseEmissionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseEmissionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
