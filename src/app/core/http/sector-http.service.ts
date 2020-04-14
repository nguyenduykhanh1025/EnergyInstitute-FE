import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { JwtService } from "../services/jwt.service";
import { RouteNames } from "src/app/constant/route-name";
import { Observable } from "rxjs";
import { Product } from "src/app/shared/modules/product";
import { map } from "rxjs/operators";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SectorHttpService {
  readonly sectorUri = "admin/sectors";

  constructor(private apiService: ApiService) {}

  getAllSectors() {
    return this.apiService.get(this.sectorUri).pipe(map((res) => res.sectors));
  }
}
