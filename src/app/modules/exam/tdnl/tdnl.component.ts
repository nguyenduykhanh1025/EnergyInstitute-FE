import { Component, OnInit, ViewChild } from "@angular/core";
import { params_get_energy_consumption } from "src/app/shared/modules/energy_consumption";
import { MatTableDataSource } from "@angular/material/table";
import { ReadFile, TDNL_V2 } from "src/app/core/http/read-file.service";
import { FormControl, FormGroup } from "@angular/forms";
import { SpinnerService } from "src/app/core/services/spinner.service";
import { CustomValidators } from "src/app/shared/validations/custom-validators";

@Component({
  selector: "app-tdnl",
  templateUrl: "./tdnl.component.html",
  styleUrls: ["./tdnl.component.css"],
})
export class TdnlComponent implements OnInit {
  dataSource: any;
  displayedColumns = [
    "nam",
    "ma_so_doanh_nghiep",
    "ten_doanh_nghiep",
    "ma_cap",
    "ten_nganh",
    "dien",
    "antracite_nltt",
    "bitum_nltt",
    "coc_nltt",
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
    "antracite_tj",
    "bitum_tj",
    "coc_tj",
    "ko_tj",
    "do_tj",
    "fo_tj",
    "lpg_tj",
    "ng_tj",
    "tong",
  ];
  params: params_get_energy_consumption = {
    year: "",
    page: "1",
    amount: "50",
  };

  fgpFilter = new FormGroup({
    year: new FormControl("", [CustomValidators.onlyNumber]),
  });

  lenghtPaginate: number;

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

  setPaginateLength(length: number) {
    this.lenghtPaginate = length;
  }

  getDataFromServer() {
    this.spinnerService.show();
    this.readFile.getTDNLV2(this.params).subscribe((data) => {
      this.dataSource = new MatTableDataSource<TDNL_V2>(data.energies);
      this.setPaginateLength(data.length);
      this.spinnerService.hide();
    });
  }
}
