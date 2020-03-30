import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivitiesCreateComponent } from './productivities-create.component';

describe('ProductivitiesCreateComponent', () => {
  let component: ProductivitiesCreateComponent;
  let fixture: ComponentFixture<ProductivitiesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivitiesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivitiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
