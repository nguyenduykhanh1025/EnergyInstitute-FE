import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { JwtService } from "../services/jwt.service";
import { Router } from "@angular/router";
import { Enterprise } from "src/app/shared/modules/enterprise";
import { EnterpriseDetail } from "src/app/shared/modules/enterprise-detail";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RouteNames } from "src/app/constant/route-name";
import { GreenhouseEmission } from "src/app/shared/modules/greenhouse_mission";
import { GreenhouseEmissionCreate } from "src/app/shared/modules/greenhouse_mission_create";

@Injectable({
  providedIn: "root",
})
export class GreenhouseEmissionHttpService {
  readonly greenhouseEmissionHttpUri = `${RouteNames.ENTERPRISE.url}/${RouteNames.ENTERPRISE.GREENHOUSE_EMISSIONS.URL}`;

  constructor(private apiService: ApiService) {}

  getAllGreenhouseEmissions(): Observable<GreenhouseEmission[]> {
    return this.apiService
      .get(this.greenhouseEmissionHttpUri)
      .pipe(map((res) => res.greenhouse_missions));
  }

  deleteFollowId(id: number) {
    let uri = `${this.greenhouseEmissionHttpUri}/${id}`;
    return this.apiService.delete(uri).pipe(map((res) => res));
  }

  createGreenhouseEmission(data: GreenhouseEmissionCreate) {
    return this.apiService
      .put(this.greenhouseEmissionHttpUri, data)
      .pipe(map((res) => res));
  }

  getFollowId(id: number): Observable<GreenhouseEmission> {
    let uri = `${this.greenhouseEmissionHttpUri}/${id}`;
    return this.apiService.get(uri).pipe(map((res) => res.greenhouse_mission));
  }
}
