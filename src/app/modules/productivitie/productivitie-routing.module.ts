import { Routes } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { ProductivitiesShowComponent } from "./page/productivities-show/productivities-show.component";
import { ProductivitiesCreateComponent } from "./page/productivities-create/productivities-create.component";
import { ProductivitiesUpdateComponent } from './page/productivities-update/productivities-update.component';

export const PRODUCTIVITIES_ROUTES: Routes = [
  {
    path: `:product_id`,
    component: ProductivitiesShowComponent
  },
  {
    path: `:product_id/${RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.CREATE.name}`,
    component: ProductivitiesCreateComponent
  },
  {
    path: `:product_id/${RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.UPDATE.name}/:year`,
    component: ProductivitiesUpdateComponent
  }
];
