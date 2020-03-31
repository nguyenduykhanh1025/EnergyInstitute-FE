import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { JwtService } from "../services/jwt.service";
import { RouteNames } from "src/app/constant/route-name";
import { Observable } from "rxjs";
import { Product } from "src/app/shared/modules/product";
import { map } from "rxjs/operators";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductHttpService {
  readonly productUri = `${RouteNames.ENTERPRISE.url}/${RouteNames.ENTERPRISE.PRODUCT.URL}`;

  constructor(private apiService: ApiService, private jwtService: JwtService) {}

  getAllProducts(): Observable<Product[]> {
    return this.apiService.get(this.productUri).pipe(map(res => res.products));
  }

  deleteProductFollowId(id: number) {
    let uri = `${this.productUri}/${id}`;
    return this.apiService.delete(uri).pipe(map(res => res));
  }

  createProduct(data: Product) {
    return this.apiService.post(this.productUri, data).pipe(map(res => res));
  }

  getProductFollowId(id: number): Observable<Product> {
    let uri = `${this.productUri}/${id}`;
    return this.apiService.get(uri).pipe(map(res => res.product));
  }

  updateProduct(id: number, product: Product) {
    let uri = `${this.productUri}/${id}`;
    return this.apiService.put(uri, product).pipe(map(res => res));
  }
}
