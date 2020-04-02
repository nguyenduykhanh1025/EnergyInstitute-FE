import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { map } from "rxjs/operators";
import { RouteNames } from "src/app/constant/route-name";
import { HttpParams } from "@angular/common/http";
import { EmissionReason } from "src/app/shared/modules/emission-reason";

@Injectable({
  providedIn: "root"
})
export class EmissionReasonHttpService {
  readonly emissionReasonUri = `${RouteNames.REASONS.URL}`;

  constructor(private apiService: ApiService) {}

  getAll(): Observable<EmissionReason[]> {
    return this.apiService
      .get(this.emissionReasonUri)
      .pipe(map(res => res.reasons));
  }
}
