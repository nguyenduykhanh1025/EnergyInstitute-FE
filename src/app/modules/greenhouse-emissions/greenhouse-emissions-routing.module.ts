import { Routes } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { GreenhouseEmissionShowComponent } from "./pages/greenhouse-emission-show/greenhouse-emission-show.component";
import { GreenhouseEmissionCreateComponent } from "./pages/greenhouse-emission-create/greenhouse-emission-create.component";
import { GreenhouseEmissionUpdateComponent } from "./pages/greenhouse-emission-update/greenhouse-emission-update.component";

export const GREENHOUSE_EMISSIONS_ROUTES: Routes = [
  {
    path: RouteNames.ENTERPRISE.GREENHOUSE_EMISSIONS.SHOW.name,
    component: GreenhouseEmissionShowComponent,
  },
  {
    path: RouteNames.ENTERPRISE.GREENHOUSE_EMISSIONS.CREATE.name,
    component: GreenhouseEmissionCreateComponent,
  },
  {
    path: `${RouteNames.ENTERPRISE.GREENHOUSE_EMISSIONS.UPDATE.name}/:id`,
    component: GreenhouseEmissionUpdateComponent,
  },
];
