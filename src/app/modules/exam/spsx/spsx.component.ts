import { Component, OnInit, ViewChild } from "@angular/core";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ReadFile, SPSX_V2 } from "src/app/core/http/read-file.service";
import { FormControl, FormGroup } from "@angular/forms";
import { params_get_product } from "src/app/shared/modules/product";
import { SpinnerService } from "src/app/core/services/spinner.service";
import { CustomValidators } from "src/app/shared/validations/custom-validators";
import { CommonService } from "src/app/core/services/common.service";
import { Value } from "src/app/constant/string";
import { SectorHttpService } from "src/app/core/http/sector-http.service";

@Component({
  selector: "app-spsx",
  templateUrl: "./spsx.component.html",
  styleUrls: ["./spsx.component.css"],
})
export class SpsxComponent implements OnInit {
  dataSource: any;
  displayedColumns = [
    "nam",
    "ma_so_doanh_nghiep",
    "ten_doanh_nghiep",
    "stt",
    "ma_san_pham",
    "ten_san_pham",
    "ma_cap_2",
    "ten_nganh_cap_2",
    "don_vi",
    "so_luong",
    "gtsx",
  ];

  params: params_get_product = {
    year: "",
    page: "1",
    amount: "50",
    sector: "",
  };
  lenghtPaginate: number;

  fgpFilter = new FormGroup({
    year: new FormControl(""),
    sector: new FormControl(""),
  });

  listYear = [];
  listSector = [];

  constructor(
    private readFile: ReadFile,
    public spinnerService: SpinnerService,
    private commonService: CommonService,
    private sectorHttpService: SectorHttpService
  ) {}

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.getDataFromServer();
    this.initDataForSelectFilter();
  }

  initDataForSelectFilter() {
    this.initListYear();
    this.initListSector();
  }

  initListYear() {
    this.listYear = this.commonService.getListYear();
    this.listYear.unshift(Value.all);
  }

  initListSector() {
    this.sectorHttpService.getAllSectors().subscribe((data) => {
      this.listSector = data;
      this.listSector.unshift(Value.all);
    });
  }

  hangePaginator($event) {
    this.params.page = $event.pageIndex + 1;
    this.params.amount = $event.pageSize;
    this.getDataFromServer();
  }

  onSubmitFilter() {
    this.params.year =
      this.fgpFilter.value.year == Value.all ? "" : this.fgpFilter.value.year;

    this.params.sector =
      this.fgpFilter.value.sector == Value.all
        ? ""
        : this.fgpFilter.value.sector;

    this.getDataFromServer();
  }

  setPaginateLength(length: number) {
    this.lenghtPaginate = length;
  }

  getDataFromServer() {
    this.spinnerService.show();
    this.readFile.getSPSXV2(this.params).subscribe((data) => {
      this.dataSource = new MatTableDataSource<SPSX_V2>(data.products);
      this.setPaginateLength(data.length);
      this.spinnerService.hide();
    });
  }
}
