import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { EnergyConsumptionsShowComponent } from "./page/energy-consumptions-show/energy-consumptions-show.component";
import { ENERGY_CONSUMPTIONS_ROUTES } from "./energy-consumptions-routing.module";
import { EnergyConsumptionsUpdateComponent } from "./page/energy-consumptions-update/energy-consumptions-update.component";
import { EnergyConsumptionsCreateComponent } from './page/energy-consumptions-create/energy-consumptions-create.component';
@NgModule({
  declarations: [
    EnergyConsumptionsShowComponent,
    EnergyConsumptionsUpdateComponent,
    EnergyConsumptionsCreateComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ENERGY_CONSUMPTIONS_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnergyConsumptionsModule {}
