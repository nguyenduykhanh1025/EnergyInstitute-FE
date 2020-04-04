import { Component, OnInit, ViewChild } from "@angular/core";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ReadFile, TDNL } from "src/app/core/http/read-file.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-tdnl",
  templateUrl: "./tdnl.component.html",
  styleUrls: ["./tdnl.component.css"],
})
export class TdnlComponent implements OnInit {
  dataSource: any;
  dataSourceCurrent: EnergyConsumption;
  displayedColumns = [
    "nam",
    "ma_so_doanh_nghiep",
    "ten_doanh_nghiep",
    "ma_cap",
    "ten_nganh",
    "dien_nltt",
    "bitum_nltt",
    "than_coc_nltt",
    "ko_nltt",
    "do_nltt",
    "fo_nltt",
    "lpg_nltt",
    "ng_nltt",
    "npk_pnl",
    "hs_pnl",
    "than_pnl",
    "ng_pnl",
    "dien_pnl",
    "antracite_nltt_tj",
    "bitum_nltt_tj",
    "than_coc_nltt_tj",
    "ko_nltt_tj",
    "do_nltt_tj",
    "fo_nltt_tj",
    "lpg_nltt_tj",
    "ng_nltt_tj",
    "tong",
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  filterFollowYear = new FormControl("");
  dataSourceOld: any;

  constructor(
    private energyConsumptionsHttpService: EnergyConsumptionsHttpService,
    private readFile: ReadFile
  ) {}

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.readFile.getTDNL().subscribe((data) => {
      this.dataSource = new MatTableDataSource<TDNL>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSourceOld = data;
    });
  }

  applyFilter() {
    this.dataSource.data = this.dataSourceOld.filter(
      (item) => item.nam == this.filterFollowYear.value
    );

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
