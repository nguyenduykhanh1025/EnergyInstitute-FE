import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductHttpService } from "src/app/core/http/product-http.service";
import { Product } from "src/app/shared/modules/product";
import { Router } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { Value } from 'src/app/constant/string';
@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"]
})
export class ProductCreateComponent implements OnInit {
  createForm = new FormGroup({
    name: new FormControl("", [Validators.required])
  });
  status = Value.post;
  
  constructor(
    private productHttpService: ProductHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleProductOutput($event) {
    let product = $event as Product;

    this.productHttpService.createProduct(product).subscribe(data => {
      this.router.navigate([
        `${RouteNames.ENTERPRISE.PRODUCT.URL}/${RouteNames.ENTERPRISE.PRODUCT.SHOW.name}`
      ]);
    });
  }
}
