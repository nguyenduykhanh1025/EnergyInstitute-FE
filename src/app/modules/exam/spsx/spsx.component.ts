import { Component, OnInit, ViewChild } from "@angular/core";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ReadFile, SPSX, SPSX_V2 } from "src/app/core/http/read-file.service";
import { FormControl, FormGroup } from "@angular/forms";
import { params_get_product } from "src/app/shared/modules/product";
import { SpinnerService } from "src/app/core/services/spinner.service";
import { CustomValidators } from "src/app/shared/validations/custom-validators";

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
  };
  lenghtPaginate: number;

  fgpFilter = new FormGroup({
    year: new FormControl("", [CustomValidators.onlyNumber]),
  });

  constructor(
    private readFile: ReadFile,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.getDataFromServer();
  }

  hangePaginator($event) {
    this.params.page = $event.pageIndex + 1;
    this.params.amount = $event.pageSize;
    this.getDataFromServer();
  }

  onSubmitFilter() {
    this.params.year = this.fgpFilter.value.year;
    this.getDataFromServer();
  }

  getPaginateLength() {
    let paramNotIncludeAmount: params_get_product = {
      year: this.params.year,
      page: this.params.page,
      amount: "",
    };

    this.readFile.getTDNLV2(paramNotIncludeAmount).subscribe((data) => {
      this.lenghtPaginate = data.length;
    });
  }

  getDataFromServer() {
    this.spinnerService.show();
    this.readFile.getSPSXV2(this.params).subscribe((data) => {
      this.dataSource = new MatTableDataSource<SPSX_V2>(data);
      this.getPaginateLength();
      this.spinnerService.hide();
    });
  }
}
