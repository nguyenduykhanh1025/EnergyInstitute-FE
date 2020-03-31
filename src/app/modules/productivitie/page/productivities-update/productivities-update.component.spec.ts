import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivitiesUpdateComponent } from './productivities-update.component';

describe('ProductivitiesUpdateComponent', () => {
  let component: ProductivitiesUpdateComponent;
  let fixture: ComponentFixture<ProductivitiesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivitiesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivitiesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
