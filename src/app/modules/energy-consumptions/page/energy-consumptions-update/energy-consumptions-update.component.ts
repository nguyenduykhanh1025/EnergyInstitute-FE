import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { CustomValidators } from "src/app/shared/validations/custom-validators";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { Router } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "src/app/shared/components/confirmation-dialog/confirmation-dialog.component";
import { Value } from "src/app/constant/string";
import { CustomSnackbarService } from "src/app/core/services/custom-snackbar.service";
@Component({
  selector: "app-energy-consumptions-update",
  templateUrl: "./energy-consumptions-update.component.html",
  styleUrls: ["./energy-consumptions-update.component.css"]
})
export class EnergyConsumptionsUpdateComponent implements OnInit {
  energyConsumption: EnergyConsumption;
  updateForm: FormGroup;

  constructor(
    private energyConsumptionsHttpService: EnergyConsumptionsHttpService,
    private router: Router,
    public dialog: MatDialog,
    public snackbarService: CustomSnackbarService
  ) {}

  ngOnInit(): void {
    this.initEnergyConsumption();
  }

  initEnergyConsumption() {
    this.energyConsumptionsHttpService
      .getEnnergyConsumptionFollowYear(this.getYearInUrl())
      .subscribe(data => {
        if (data != null) {
          this.energyConsumption = data[0];
          this.addInfomationToUpdateForm();
        }
      });
  }

  addInfomationToUpdateForm() {
    this.updateForm = new FormGroup({
      self_produced_electricity: new FormControl(
        this.energyConsumption.self_produced_electricity,
        [Validators.required, CustomValidators.onlyNumber]
      ),
      consumption_electricity: new FormControl(
        this.energyConsumption.consumption_electricity,
        [Validators.required, CustomValidators.onlyNumber]
      ),
      coal: new FormControl(this.energyConsumption.coal, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      bitum_coal: new FormControl(this.energyConsumption.bitum_coal, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      coke_coal: new FormControl(this.energyConsumption.coke_coal, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      dust_coal: new FormControl(this.energyConsumption.dust_coal, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      ko: new FormControl(this.energyConsumption.ko, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      do: new FormControl(this.energyConsumption.do, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      fo: new FormControl(this.energyConsumption.fo, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      lpg: new FormControl(this.energyConsumption.lpg, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      ng: new FormControl(this.energyConsumption.ng, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      biomass_energy: new FormControl(this.energyConsumption.biomass_energy, [
        Validators.required,
        CustomValidators.onlyNumber
      ]),
      renewable_energy: new FormControl(
        this.energyConsumption.renewable_energy,
        [Validators.required, CustomValidators.onlyNumber]
      )
    });
  }

  onUpdate() {
    if (!this.updateForm.invalid) {
      let energyConsumption: EnergyConsumption = this.updateForm
        .value as EnergyConsumption;
      energyConsumption.year_of_investigation = Number(this.getYearInUrl());
      this.energyConsumptionsHttpService
        .updateEnnergyConsumption(energyConsumption)
        .subscribe(data => {
          this.router.navigate([
            `${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL}`
          ]);
        });
    } else {
      this.snackbarService.success(`${Value.action_fail}`);
    }
  }

  getYearInUrl() {
    return this.router.url.split("/")[this.router.url.split("/").length - 1];
  }

  onReturn() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "250px",
      data: { title: Value.return, message: Value.return_qes }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.router.navigate([
          `/${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL}`
        ]);
      }
    });
  }
}
