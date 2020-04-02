import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { ReadFile, PTNL } from 'src/app/core/http/read-file.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-ptnl",
  templateUrl: "./ptnl.component.html",
  styleUrls: ["./ptnl.component.css"]
})
export class PTNLComponent implements OnInit {
  dataSource: any;
  displayedColumns = [
    "nam",
    "ma_so_doanh_nghiep",
    "ten_doanh_nghiep",
    "ma_cap_2",
    "ten_nganh_cap_2",
    "he_so_su_dung_nang_luong",
    "dien",
    "antracite_co2",
    "antracite_ch4",
    "antracite_n2o",
    "coke_co2",
    "coke_ch4",
    "coke_n2o",
    "bitum_co2",
    "bitum_ch4",
    "bitum_n2o",
    "do_co2",
    "do_ch4",
    "do_n2o",
    "fo_co2",
    "fo_ch4",
    "fo_n2o",
    "lpg_co2",
    "lpg_ch4",
    "lpg_n2o",
    "khi_tu_nhien_co2",
    "khi_tu_nhien_ch4",
    "khi_tu_nhien_n2o",
    "nang_luong_sinh_khoi_co2",
    "nang_luong_sinh_khoi_ch4",
    "nang_luong_sinh_khoi_n2o",
    "tong_co2",
    "tong_ch4",
    "tong_n2o",
    "tong"
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private readFile: ReadFile) {}

  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.readFile.getPTNL().subscribe(data => {
      this.dataSource = new MatTableDataSource<PTNL>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
