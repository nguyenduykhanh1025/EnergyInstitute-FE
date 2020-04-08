import { Component, OnInit, ViewChild } from "@angular/core";
import { ReadFile, TPT_V2 } from "src/app/core/http/read-file.service";
import { MatTableDataSource } from "@angular/material/table";
import { FormControl, FormGroup } from "@angular/forms";
import { SpinnerService } from "src/app/core/services/spinner.service";
import { params_get_emission_sum } from "src/app/shared/modules/emission_sum";
import { CustomValidators } from "src/app/shared/validations/custom-validators";

@Component({
  selector: "app-tpt",
  templateUrl: "./tpt.component.html",
  styleUrls: ["./tpt.component.css"],
})
export class TPTComponent implements OnInit {
  dataSource: any;
  displayedColumns = [
    "nam",
    "ten_doanh_nghiep",
    "ma_so_doanh_nghiep",
    "ma_cap_2",
    "ten_nganh_cap_2",
    "dien",
    "qtnl_co2",
    "qtnl_ch4",
    "qtnl_n2o",
    "pnl_co2",
    "pnl_ch4",
    "pnl_n2o",
    "phat_tan_co2",
    "phat_tan_ch4",
    "phat_tan_n2o",
    "qtcn_co2",
    "qtcn_ch4",
    "tong_tru_dien_co2",
    "tong_tru_dien_ch4",
    "tong_tru_dien_n2o",
    "tong_co2",
    "tong_ch4",
    "tong_n2o",
    "tong_quy_doi",
  ];

  params: params_get_emission_sum = {
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
    this.readFile.getTPTV2(this.params).subscribe((data) => {
      this.dataSource = new MatTableDataSource<TPT_V2>(data.emission_sum);
      this.setPaginateLength(data.length);
      this.spinnerService.hide();
    });
  }
}
