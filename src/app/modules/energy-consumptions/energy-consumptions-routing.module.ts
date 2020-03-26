import { Routes } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { EnergyConsumptionsShowComponent } from "./page/energy-consumptions-show/energy-consumptions-show.component";
import { EnergyConsumptionsUpdateComponent } from "./page/energy-consumptions-update/energy-consumptions-update.component";
import { EnergyConsumptionsCreateComponent } from "./page/energy-consumptions-create/energy-consumptions-create.component";

export const ENERGY_CONSUMPTIONS_ROUTES: Routes = [
  {
    path: RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.SHOW.name,
    component: EnergyConsumptionsShowComponent
  },
  {
    path: `${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.UPDATE.name}/:id`,
    component: EnergyConsumptionsUpdateComponent
  },
  {
    path: `${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.CREATE.name}`,
    component: EnergyConsumptionsCreateComponent
  }
];
