import { Routes } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { EnergyConsumptionsShowComponent } from './page/energy-consumptions-show/energy-consumptions-show.component';
export const ENERGY_CONSUMPTIONS_ROUTES: Routes = [
  {
    path: RouteNames.ENERGY_CONSUMPTIONS.SHOW.name,
    component:EnergyConsumptionsShowComponent
  }
];
