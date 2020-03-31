import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidators } from "src/app/shared/validations/custom-validators";
import { ProductivitieHttpService } from "src/app/core/http/productivitie-http.service";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { Value } from "src/app/constant/string";
import { RouteNames } from "src/app/constant/route-name";

@Component({
  selector: "app-productivities-create",
  templateUrl: "./productivities-create.component.html",
  styleUrls: ["./productivities-create.component.css"]
})
export class ProductivitiesCreateComponent implements OnInit {
  createForm = new FormGroup({
    amount: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    year_of_investigation: new FormControl("", [Validators.required])
  });
  productId: number;
  readonly STATUS = Value.post;

  constructor(
    private productivitieHttpService: ProductivitieHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initProductId();
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

  initProductId() {
    this.getIdProductFromUrl().subscribe(data => {
      this.productId = Number(data);
    });
  }

  getIdProductFromUrl() {
    return this.route.paramMap.pipe(
      map(paramMap => paramMap.get(Value.product_id))
    );
  }
}
