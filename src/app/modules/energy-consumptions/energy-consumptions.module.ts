import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { EnergyConsumptionsShowComponent } from './page/energy-consumptions-show/energy-consumptions-show.component';
import { ENERGY_CONSUMPTIONS_ROUTES } from './energy-consumptions-routing.module';
@NgModule({
  declarations: [
  EnergyConsumptionsShowComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ENERGY_CONSUMPTIONS_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnergyConsumptionsModule {}
