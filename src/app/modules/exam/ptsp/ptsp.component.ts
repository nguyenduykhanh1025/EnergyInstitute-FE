import { Component, OnInit } from "@angular/core";
import { ReadFile, PTSP_V2 } from "src/app/core/http/read-file.service";
import { MatTableDataSource } from "@angular/material/table";
import { FormControl, FormGroup } from "@angular/forms";
import { SpinnerService } from "src/app/core/services/spinner.service";
import { params_get_emission_products } from "src/app/shared/modules/emission_products";
import { CustomValidators } from "src/app/shared/validations/custom-validators";

@Component({
  selector: "app-ptsp",
  templateUrl: "./ptsp.component.html",
  styleUrls: ["./ptsp.component.css"],
})
export class PTSPComponent implements OnInit {
  dataSource: any;
  displayedColumns = [
    "nam",
    "ma_so_doanh_nghiep",
    "ten_doanh_nghiep",
    "ma_nganh_2",
    "te_cap_2",
    "ma_sp",
    "ten_sp",
    "don_vi",
    "khoi_luong",
    "hspt_co2",
    "hspt_ch4",
    "phat_thai_co2",
    "phat_thai_ch4",
  ];

  params: params_get_emission_products = {
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
    this.initData();
  }

  initData() {
    this.getDataFromServer();
  }

  setPaginateLength(length: number) {
    this.lenghtPaginate = length;
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

  getDataFromServer() {
    this.spinnerService.show();
    this.readFile.getPTSPV2(this.params).subscribe((data) => {
      this.dataSource = new MatTableDataSource<PTSP_V2>(data.emission_products);
      this.setPaginateLength(data.length);
      this.spinnerService.hide();
    });
  }
}
