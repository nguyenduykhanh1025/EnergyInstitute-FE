import { Component, OnInit, ViewChild } from "@angular/core";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ReadFile, TTDN, TTDN_V2 } from "src/app/core/http/read-file.service";
import { FormControl, FormGroup } from "@angular/forms";
import { CustomValidators } from "src/app/shared/validations/custom-validators";
import { SpinnerService } from "src/app/core/services/spinner.service";
import { params_get_enterprises } from "src/app/shared/modules/enterprise";

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
    amount: 50,
  };

  fgpFilter = new FormGroup({
    year: new FormControl("", [CustomValidators.onlyNumber]),
    province: new FormControl(""),
  });

  constructor(
    private readFile: ReadFile,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.spinnerService.show();
    this.readFile.getTTDNV2(this.params).subscribe((data) => {
      this.dataSource = new MatTableDataSource<TTDN_V2>(data);
      this.spinnerService.hide();
    });
  }

  hangePaginator($event) {
    this.params.page = $event.pageIndex + 1;
    this.params.amount = $event.pageSize;

    this.spinnerService.show();
    this.readFile.getTTDNV2(this.params).subscribe((data) => {
      this.dataSource = new MatTableDataSource<TTDN_V2>(data);
      this.spinnerService.hide();
    });
  }

  onSubmitFilter() {
    this.params.province = this.fgpFilter.value.province;
    this.params.year = this.fgpFilter.value.year;

    this.spinnerService.show();
    this.readFile.getTTDNV2(this.params).subscribe((data) => {
      this.dataSource = new MatTableDataSource<TTDN_V2>(data);
      this.spinnerService.hide();
    });
  }
}
