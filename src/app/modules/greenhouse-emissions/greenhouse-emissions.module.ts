import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { GREENHOUSE_EMISSIONS_ROUTES } from "./greenhouse-emissions-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { GreenhouseEmissionShowComponent } from './pages/greenhouse-emission-show/greenhouse-emission-show.component';
import { GreenhouseEmissionCreateComponent } from './pages/greenhouse-emission-create/greenhouse-emission-create.component';
import { GreenhouseEmissionInputComponent } from './components/greenhouse-emission-input/greenhouse-emission-input.component';
import { GreenhouseEmissionUpdateComponent } from './pages/greenhouse-emission-update/greenhouse-emission-update.component';

@NgModule({
  declarations: [GreenhouseEmissionShowComponent, GreenhouseEmissionCreateComponent, GreenhouseEmissionInputComponent, GreenhouseEmissionUpdateComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(GREENHOUSE_EMISSIONS_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GreenhouseEmissionsModule {}
