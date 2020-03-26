import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { map } from "rxjs/operators";
import { RouteNames } from "src/app/constant/route-name";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EnergyConsumptionsHttpService {
  readonly energyConsumptionsUri = `${RouteNames.ENTERPRISE.url}/${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL}`;

  constructor(private apiService: ApiService) {}

  getAllEnnergyConsumptions(): Observable<EnergyConsumption[]> {
    return this.apiService
      .get(this.energyConsumptionsUri)
      .pipe(map(res => res.energy_consumptions));
  }

  updateEnnergyConsumption(ennergyConsumption: EnergyConsumption) {
    return this.apiService
      .put(this.energyConsumptionsUri, ennergyConsumption)
      .pipe(map(res => res.energy_consumption));
  }

  getEnnergyConsumptionFollowYear(year: string) {
    let param = new HttpParams().set("year", year);
    return this.apiService
      .get(this.energyConsumptionsUri, param)
      .pipe(map(res => res.energy_consumptions));
  }
}
