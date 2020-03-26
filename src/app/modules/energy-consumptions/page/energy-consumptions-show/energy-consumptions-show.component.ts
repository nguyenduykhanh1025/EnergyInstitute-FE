import { Component, OnInit, ViewChild } from "@angular/core";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { Router } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";

@Component({
  selector: "app-energy-consumptions-show",
  templateUrl: "./energy-consumptions-show.component.html",
  styleUrls: ["./energy-consumptions-show.component.css"]
})
export class EnergyConsumptionsShowComponent implements OnInit {
  dataSource: EnergyConsumption[];
  dataSourceCurrent: EnergyConsumption;
  displayedColumns = [
    "year_of_investigation",
    "self_produced_electricity",
    "consumption_electricity",
    "coal",
    "bitum_coal",
    "coke_coal",
    "dust_coal",
    "ko",
    "do",
    "fo",
    "lpg",
    "ng",
    "biomass_energy",
    "renewable_energy",
    "update"
  ];

  constructor(
    private energyConsumptionsHttpService: EnergyConsumptionsHttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initDataSource();
  }

  initDataSource() {
    this.energyConsumptionsHttpService
      .getAllEnnergyConsumptions()
      .subscribe(data => {
        this.dataSource = data;
        if (data[0] != null) {
          this.dataSourceCurrent = data[0];
          console.log(this.dataSourceCurrent.year_of_investigation);
        }
      });
  }

  getDataSourceCurrentFollowYearOfInvestigation(
    year_of_investigation: number
  ): EnergyConsumption {
    if (this.dataSource != null) {
      return this.dataSource.find(item => {
        return item.year_of_investigation == year_of_investigation;
      });
    }
  }

  handleChangeYearOfInvestigation(year_of_investigation: number) {
    this.dataSourceCurrent = this.getDataSourceCurrentFollowYearOfInvestigation(
      year_of_investigation
    );
  }

  onClickUpdate(id: number) {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL}/${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.UPDATE.name}/${id}`
    ]);
  }

  onCreateEnergyConsumption() {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL}/${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.CREATE.name}`
    ]);
  }
}
