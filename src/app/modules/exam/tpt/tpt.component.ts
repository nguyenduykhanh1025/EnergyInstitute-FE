import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { ReadFile, TPT } from "src/app/core/http/read-file.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-tpt",
  templateUrl: "./tpt.component.html",
  styleUrls: ["./tpt.component.css"]
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
    "tong_quy_doi"
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private readFile: ReadFile) {}

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.readFile.getTPT().subscribe(data => {
      this.dataSource = new MatTableDataSource<TPT>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
