import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivitiesInputComponent } from './productivities-input.component';

describe('ProductivitiesInputComponent', () => {
  let component: ProductivitiesInputComponent;
  let fixture: ComponentFixture<ProductivitiesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivitiesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivitiesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
