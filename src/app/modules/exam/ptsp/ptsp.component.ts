import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { ReadFile, PTSP } from "src/app/core/http/read-file.service";
import { MatTableDataSource } from "@angular/material/table";
import { FormControl } from "@angular/forms";

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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private readFile: ReadFile) {}
  filterFollowYear = new FormControl("");
  dataSourceOld: any;

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.readFile.getPTSP().subscribe((data) => {
      this.dataSource = new MatTableDataSource<PTSP>(data);
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
