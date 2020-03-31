import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { JwtService } from "../services/jwt.service";
import { RouteNames } from "src/app/constant/route-name";
import { Observable } from "rxjs";
import { Product } from "src/app/shared/modules/product";
import { map } from "rxjs/operators";
import { HttpParams } from "@angular/common/http";
import { Productivitie } from "src/app/shared/modules/productivitie";

@Injectable({
  providedIn: "root"
})
export class ProductivitieHttpService {
  readonly productUri = `${RouteNames.ENTERPRISE.url}/${RouteNames.ENTERPRISE.PRODUCT.URL}`;

  constructor(private apiService: ApiService, private jwtService: JwtService) {}

  getProductivitiesFollowIdProduct(
    idProduct: number
  ): Observable<Productivitie[]> {
    let uri = `${this.productUri}/${idProduct}/${RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.URL}`;
    return this.apiService.get(uri).pipe(map(res => res.productivities));
  }

  deleteFollowId(id: number, idProduct: number) {
    let uri = `${this.productUri}/${idProduct}/${RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.URL}/${id}`;
    return this.apiService.delete(uri).pipe(map(res => res));
  }

  createProductivitie(data: Productivitie, productId: number) {
    let uri = `${this.productUri}/${productId}/${RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.URL}`;
    return this.apiService.put(uri, data).pipe(res => res);
  }

  getProductivitieFollowYear(
    year: number,
    productId: number
  ): Observable<Productivitie> {
    let uri = `${this.productUri}/${productId}/${RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.URL}`;
    let param = new HttpParams().set("year", `${year}`);
    return this.apiService
      .get(uri, param)
      .pipe(map(res => res.productivities[0]));
  }
}
