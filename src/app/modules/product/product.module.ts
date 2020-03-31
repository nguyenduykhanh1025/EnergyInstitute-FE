import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { PRODUCT_ROUTES } from "./product-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductShowComponent } from './page/product-show/product-show.component';
import { ProductCreateComponent } from './page/product-create/product-create.component';
import { ProductInputComponent } from './components/product-input/product-input.component';
import { ProductUpdateComponent } from './page/product-update/product-update.component';

@NgModule({
  declarations: [ProductShowComponent, ProductCreateComponent, ProductInputComponent, ProductUpdateComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(PRODUCT_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule {}
