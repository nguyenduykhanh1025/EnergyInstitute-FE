import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PRODUCTIVITIES_ROUTES } from "./productivitie-routing.module";
import { ProductivitiesShowComponent } from './page/productivities-show/productivities-show.component';
import { ProductivitiesCreateComponent } from './page/productivities-create/productivities-create.component';

@NgModule({
  declarations: [ProductivitiesShowComponent, ProductivitiesCreateComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(PRODUCTIVITIES_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductivitieModule {}
