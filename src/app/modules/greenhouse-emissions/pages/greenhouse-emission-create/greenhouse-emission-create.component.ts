import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Product } from "src/app/shared/modules/product";
import { ProductHttpService } from "src/app/core/http/product-http.service";
import { EmissionReason } from "src/app/shared/modules/emission-reason";
import { EmissionReasonHttpService } from "src/app/core/http/emission-reason-http.service";
import { Router } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { GreenhouseEmissionCreate } from "src/app/shared/modules/greenhouse_mission_create";
import { GreenhouseEmissionHttpService } from "src/app/core/http/greenhouse-emission-http.service";

@Component({
  selector: "app-greenhouse-emission-create",
  templateUrl: "./greenhouse-emission-create.component.html",
  styleUrls: ["./greenhouse-emission-create.component.css"]
})
export class GreenhouseEmissionCreateComponent implements OnInit {
  formData = new FormGroup({
    year_of_investigation: new FormControl("", [Validators.required]),
    product_id: new FormControl(""),
    emission_reason_id: new FormControl("", [Validators.required]),
    carbon_dioxide: new FormControl("", [Validators.required]),
    methane: new FormControl("", [Validators.required]),
    nitrous_dioxide: new FormControl("", [Validators.required])
  });

  constructor() {}

  ngOnInit(): void {}

  handleGreenhouseEmissionOutput($event) {
    console.log($event);
  }
}
