import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidators } from "src/app/shared/validations/custom-validators";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { Router } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { MatDialog } from "@angular/material/dialog";
import { CustomSnackbarService } from "src/app/core/services/custom-snackbar.service";
import { ConfirmationDialogComponent } from "src/app/shared/components/confirmation-dialog/confirmation-dialog.component";
import { Value } from "src/app/constant/string";

@Component({
  selector: "app-energy-consumptions-create",
  templateUrl: "./energy-consumptions-create.component.html",
  styleUrls: ["./energy-consumptions-create.component.css"]
})
export class EnergyConsumptionsCreateComponent implements OnInit {
  yearList: Number[];
  updateForm = new FormGroup({
    year_of_investigation: new FormControl("", [Validators.required]),
    self_produced_electricity: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    consumption_electricity: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    coal: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    bitum_coal: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    coke_coal: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    dust_coal: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    ko: new FormControl("", [Validators.required, CustomValidators.onlyNumber]),
    do: new FormControl("", [Validators.required, CustomValidators.onlyNumber]),
    fo: new FormControl("", [Validators.required, CustomValidators.onlyNumber]),
    lpg: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    ng: new FormControl("", [Validators.required, CustomValidators.onlyNumber]),
    biomass_energy: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    renewable_energy: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ])
  });

  constructor(
    private energyConsumptionsHttpService: EnergyConsumptionsHttpService,
    private router: Router,
    public dialog: MatDialog,
    public snackbarService: CustomSnackbarService
  ) {}

  ngOnInit(): void {
    this.initYearList();
  }

  onCreate() {
    if (!this.updateForm.invalid) {
      let energyConsumption: EnergyConsumption = this.updateForm
        .value as EnergyConsumption;

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

  initYearList() {
    this.yearList = this.getListYear(FRORM_YEAR, TO_YEAR);
  }

  getListYear(from: number, to: number) {
    let listYear: Number[] = [];
    for (let i = to; i >= from; --i) {
      listYear.push(i);
    }
    return listYear;
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

const FRORM_YEAR = 2000;
const TO_YEAR = new Date().getFullYear();
