import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductHttpService } from "src/app/core/http/product-http.service";
import { Router } from "@angular/router";
import { Product } from "src/app/shared/modules/product";
import { RouteNames } from "src/app/constant/route-name";
import { Value } from "src/app/constant/string";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"]
})
export class ProductUpdateComponent implements OnInit {
  updateForm: FormGroup;
  producOld: Product;
  status = Value.update;

  constructor(
    private productHttpService: ProductHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initUpdateForm();
  }

  initUpdateForm() {
    this.productHttpService
      .getProductFollowId(Number(this.getIdInUrl()))
      .subscribe(data => {
        this.producOld = data;
        this.updateForm = new FormGroup({
          name: new FormControl(this.producOld.name, [Validators.required])
        });
      });
  }

  handleProductOutput($event) {
    let product = $event as Product;
    this.productHttpService
      .updateProduct(this.producOld.id, product)
      .subscribe(data => {
        this.router.navigate([
          `${RouteNames.ENTERPRISE.PRODUCT.URL}/${RouteNames.ENTERPRISE.PRODUCT.SHOW.name}`
        ]);
      });
  }

  getIdInUrl() {
    return this.router.url.split("/")[this.router.url.split("/").length - 1];
  }
}
