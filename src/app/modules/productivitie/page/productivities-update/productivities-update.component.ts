import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidators } from "src/app/shared/validations/custom-validators";
import { Value } from "src/app/constant/string";
import { ProductivitieHttpService } from "src/app/core/http/productivitie-http.service";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { RouteNames } from "src/app/constant/route-name";

@Component({
  selector: "app-productivities-update",
  templateUrl: "./productivities-update.component.html",
  styleUrls: ["./productivities-update.component.css"]
})
export class ProductivitiesUpdateComponent implements OnInit {
  updateForm: FormGroup;
  productId: number;
  yearOfInventication: number;
  readonly STATUS = Value.update;

  constructor(
    private productivitieHttpService: ProductivitieHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductId();
    this.getYearOfInvestigation();
    this.initFormUpdate();
  }

  initFormUpdate() {
    if (this.yearOfInventication && this.productId) {
      this.productivitieHttpService
        .getProductivitieFollowYear(this.yearOfInventication, this.productId)
        .subscribe(data => {
          this.updateForm = new FormGroup({
            year_of_investigation: new FormControl(data.year_of_investigation, [
              Validators.required
            ]),
            amount: new FormControl(data.amount, [
              Validators.required,
              CustomValidators.onlyNumber
            ])
          });
        });
    }
  }

  handlePoductivitieOutput($event) {
    if (this.productId) {
      this.productivitieHttpService
        .createProductivitie($event, this.productId)
        .subscribe(data => {
          this.router.navigate([
            RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.URL,
            this.productId
          ]);
        });
    }
  }

  getProductId() {
    this.getProductIdFromUrl().subscribe(data => {
      this.productId = Number(data);
    });
  }

  getYearOfInvestigation() {
    this.getYearOfInvestigationFromUrl().subscribe(data => {
      this.yearOfInventication = Number(data);
    });
  }

  getProductIdFromUrl() {
    return this.route.paramMap.pipe(
      map(paramMap => paramMap.get(Value.product_id))
    );
  }

  getYearOfInvestigationFromUrl() {
    return this.route.paramMap.pipe(map(paramMap => paramMap.get(Value.year)));
  }
}
