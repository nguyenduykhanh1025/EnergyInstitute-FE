import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GreenhouseEmissionHttpService } from "src/app/core/http/greenhouse-emission-http.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RouteNames } from "src/app/constant/route-name";
import { GreenhouseEmission } from "src/app/shared/modules/greenhouse_mission";
import { Value } from 'src/app/constant/string';

@Component({
  selector: "app-greenhouse-emission-update",
  templateUrl: "./greenhouse-emission-update.component.html",
  styleUrls: ["./greenhouse-emission-update.component.css"],
})
export class GreenhouseEmissionUpdateComponent implements OnInit {
  formData: FormGroup;
  status = Value.update;
  
  constructor(
    private greenhouseEmissionHttpService: GreenhouseEmissionHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer() {
    this.greenhouseEmissionHttpService
      .getFollowId(Number(this.getIdInUrl()))
      .subscribe((data) => {
        this.initFormGroup(data);
      });
  }

  initFormGroup(data: GreenhouseEmission) {
    this.formData = new FormGroup({
      year_of_investigation: new FormControl(data.year_of_investigation, [
        Validators.required,
      ]),
      product_id: new FormControl(data.product.id),
      emission_reason_id: new FormControl(
        data.greenhouse_emission_details[0].emission_reason.id,
        [Validators.required]
      ),
      carbon_dioxide: new FormControl(
        data.greenhouse_emission_details[0].carbon_dioxide,
        [Validators.required]
      ),
      methane: new FormControl(data.greenhouse_emission_details[0].methane, [
        Validators.required,
      ]),
      nitrous_dioxide: new FormControl(
        data.greenhouse_emission_details[0].nitrous_dioxide,
        [Validators.required]
      ),
    });
  }

  handleGreenhouseEmissionOutput($event) {
    this.greenhouseEmissionHttpService
      .createGreenhouseEmission($event)
      .subscribe((data) => {
        this.router.navigate([
          `${RouteNames.ENTERPRISE.GREENHOUSE_EMISSIONS.URL}`,
        ]);
      });
  }
  getIdInUrl() {
    return this.router.url.split("/")[this.router.url.split("/").length - 1];
  }
}
