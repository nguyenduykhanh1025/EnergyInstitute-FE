import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProductHttpService } from "src/app/core/http/product-http.service";
import { EmissionReasonHttpService } from "src/app/core/http/emission-reason-http.service";
import { Router } from "@angular/router";
import { GreenhouseEmissionHttpService } from "src/app/core/http/greenhouse-emission-http.service";
import { Product } from "src/app/shared/modules/product";
import { EmissionReason } from "src/app/shared/modules/emission-reason";
import { GreenhouseEmissionCreate } from "src/app/shared/modules/greenhouse_mission_create";
import { FormGroup } from "@angular/forms";
import { RouteNames } from "src/app/constant/route-name";
import { Value } from "src/app/constant/string";

@Component({
  selector: "app-greenhouse-emission-input",
  templateUrl: "./greenhouse-emission-input.component.html",
  styleUrls: ["./greenhouse-emission-input.component.css"],
})
export class GreenhouseEmissionInputComponent implements OnInit {
  @Input() formData: FormGroup;
  @Output() greenhouseEmissionOutput = new EventEmitter<
    GreenhouseEmissionCreate
  >();
  @Input() status: String;

  products: Product[];
  yearList: Number[];
  emissionReasons: EmissionReason[];
  statusDisabledYearOfInvent: Boolean;

  constructor(
    private productHttpService: ProductHttpService,
    private emissionReasonHttpService: EmissionReasonHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initYearList();
    this.initProducts();
    this.initEmissionReasons();
    this.initStatusDisabledYearOfInvent();
  }

  initStatusDisabledYearOfInvent() {
    this.statusDisabledYearOfInvent =
      this.status == Value.update ? true : false;
    console.log(this.statusDisabledYearOfInvent);
  }

  initEmissionReasons() {
    this.emissionReasonHttpService.getAll().subscribe((data) => {
      this.emissionReasons = data;
    });
  }

  initProducts() {
    this.productHttpService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
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
    this.router.navigate([`${RouteNames.ENTERPRISE.GREENHOUSE_EMISSIONS.URL}`]);
  }

  onOutput() {
    this.greenhouseEmissionOutput.emit(
      this.formData.value as GreenhouseEmissionCreate
    );
    // this.greenhouseEmissionHttpService
    //   .createGreenhouseEmission()
    //   .subscribe(data => {
    //     console.log(data);
    //   });
  }
}
const FRORM_YEAR = 2000;
const TO_YEAR = new Date().getFullYear();
