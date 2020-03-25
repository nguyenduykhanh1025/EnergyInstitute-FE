import { Component, OnInit, ViewChild } from "@angular/core";
import { EnergyConsumptions } from "src/app/shared/modules/energy_consumptions";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";

@Component({
  selector: "app-energy-consumptions-show",
  templateUrl: "./energy-consumptions-show.component.html",
  styleUrls: ["./energy-consumptions-show.component.css"]
})
export class EnergyConsumptionsShowComponent implements OnInit {
  dataSource: EnergyConsumptions[];
  dataSourceCurrent: EnergyConsumptions;
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
    "renewable_energy"
  ];

  constructor(
    private energyConsumptionsHttpService: EnergyConsumptionsHttpService
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
  ): EnergyConsumptions {
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
}
