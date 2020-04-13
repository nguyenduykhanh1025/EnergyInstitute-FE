import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ReadFile, TTDN_V2 } from "src/app/core/http/read-file.service";
import { FormControl, FormGroup } from "@angular/forms";
import { CustomValidators } from "src/app/shared/validations/custom-validators";
import { SpinnerService } from "src/app/core/services/spinner.service";
import { params_get_enterprises } from "src/app/shared/modules/enterprise";
import { AddressHttpService } from "src/app/core/http/address-http.service";
import { CommonService } from "src/app/core/services/common.service";
import { Value } from "src/app/constant/string";

@Component({
  selector: "app-ttdn",
  templateUrl: "./ttdn.component.html",
  styleUrls: ["./ttdn.component.css"],
})
export class TTDNComponent implements OnInit {
  dataSource: any;
  displayedColumns = [
    "nam",
    "ma_so_doanh_nghiep",
    "ten_doanh_nghiep",
    "tinh",
    "huyen",
    "xa",
    "toa_do_X",
    "toa_do_Y",
    "nganh_cap_1",
    "ma_Cap",
    "ten_nganh_cap_2",
    "gtsx",
    "so_lao_dong",
  ];

  params: params_get_enterprises = {
    year: "",
    province: "",
    page: 1,
    amount: "50",
  };

  lenghtPaginate: number;

  fgpFilter = new FormGroup({
    year: new FormControl(""),
    province: new FormControl(""),
  });

  listYear = [];
  listProvice = [];

  constructor(
    private readFile: ReadFile,
    public spinnerService: SpinnerService,
    private commonService: CommonService,
    private addressHttpService: AddressHttpService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.getDataFromServer();
    this.initDataForSelectFilter();
  }

  initDataForSelectFilter() {
    this.initListProvice();
    this.initListYear();
  }

  initListYear() {
    this.listYear = this.commonService.getListYear();
    this.listYear.unshift(Value.all);
  }

  initListProvice() {
    this.addressHttpService.getAllProvincial().subscribe((data) => {
      data.forEach((item) => {
        this.listProvice.push(item.name);
      });
      this.listProvice.unshift(Value.all);
    });
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
    this.params.province =
      this.fgpFilter.value.province == Value.all
        ? ""
        : this.fgpFilter.value.province;
    this.params.year =
      this.fgpFilter.value.year == Value.all ? "" : this.fgpFilter.value.year;
    this.getDataFromServer();
  }

  getDataFromServer() {
    this.spinnerService.show();
    this.readFile.getTTDNV2(this.params).subscribe((data) => {
      this.dataSource = new MatTableDataSource<TTDN_V2>(data.enterprises);
      this.setPaginateLength(data.length);
      this.spinnerService.hide();
    });
  }
}
