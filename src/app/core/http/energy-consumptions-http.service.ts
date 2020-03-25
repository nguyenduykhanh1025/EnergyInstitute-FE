import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { EnergyConsumptions } from "src/app/shared/modules/energy_consumptions";
import { map } from "rxjs/operators";
import { RouteNames } from "src/app/constant/route-name";

@Injectable({
  providedIn: "root"
})
export class EnergyConsumptionsHttpService {
  readonly energyConsumptionsUri = `${RouteNames.ENTERPRISE.url}/${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL}`;

  constructor(private apiService: ApiService) {}

  getAllEnnergyConsumptions(): Observable<EnergyConsumptions[]> {
    return this.apiService
      .get(this.energyConsumptionsUri)
      .pipe(map(res => res.energy_consumptions));
  }
}
