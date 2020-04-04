import { Component, OnInit, ViewChild } from "@angular/core";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ReadFile, TTDN } from "src/app/core/http/read-file.service";
import { FormControl } from "@angular/forms";
import { CustomValidators } from "src/app/shared/validations/custom-validators";

@Component({
  selector: "app-ttdn",
  templateUrl: "./ttdn.component.html",
  styleUrls: ["./ttdn.component.css"],
})
export class TTDNComponent implements OnInit {
  dataSource: any;
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
    // "update",
    // "delete",
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  filterFollowYear = new FormControl("");
  filterFollowCity = new FormControl("");
  dataSourceOld: any;

  constructor(
    private energyConsumptionsHttpService: EnergyConsumptionsHttpService,
    private readFile: ReadFile
  ) {}

  ngOnInit(): void {
    // this.initDataSource();
    this.initData();
  }

  initData() {
    this.readFile.getTTDN().subscribe((data) => {
      this.dataSource = new MatTableDataSource<TTDN>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSourceOld = data;
    });
  }

  applyFilter() {
    if (this.filterFollowCity.value == "") {
      this.dataSource.data = this.dataSourceOld.filter(
        (item) => item.nam == this.filterFollowYear.value
      );
    } else if (this.filterFollowYear.value == "") {
      this.dataSource.data = this.dataSourceOld.filter((item) => {
        return (
          item.tinh
            .toLowerCase()
            .search(this.filterFollowCity.value.toLowerCase()) != -1
        );
      });
    } else {
      this.dataSource.data = this.dataSourceOld.filter((item) => {
        return (
          item.nam == this.filterFollowYear.value &&
          item.tinh
            .toLowerCase()
            .search(this.filterFollowCity.value.toLowerCase()) != -1
        );
      });
    }

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue == "") {
      console.log(this.dataSourceOld);

      this.dataSource.data = [...this.dataSourceOld];
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
}
