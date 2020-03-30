import { Routes } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { ProductShowComponent } from "./page/product-show/product-show.component";
import { ProductCreateComponent } from "./page/product-create/product-create.component";
import { ProductUpdateComponent } from "./page/product-update/product-update.component";

export const PRODUCT_ROUTES: Routes = [
  {
    path: RouteNames.ENTERPRISE.PRODUCT.SHOW.name,
    component: ProductShowComponent
  },
  {
    path: RouteNames.ENTERPRISE.PRODUCT.CREATE.name,
    component: ProductCreateComponent
  },
  {
    path: `${RouteNames.ENTERPRISE.PRODUCT.UPDATE.name}/:id`,
    component: ProductUpdateComponent
  }
];
