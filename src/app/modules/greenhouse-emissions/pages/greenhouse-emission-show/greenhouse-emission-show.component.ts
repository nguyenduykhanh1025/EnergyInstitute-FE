import { Component, OnInit } from "@angular/core";
import { GreenhouseEmissionHttpService } from "src/app/core/http/greenhouse-emission-http.service";
import { GreenhouseEmission } from "src/app/shared/modules/greenhouse_mission";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDeleteDialogComponent } from "src/app/shared/components/confirm-delete-dialog/confirm-delete-dialog.component";
import { Value } from "src/app/constant/string";
import { RouteNames } from "src/app/constant/route-name";
import { Router } from "@angular/router";

@Component({
  selector: "app-greenhouse-emission-show",
  templateUrl: "./greenhouse-emission-show.component.html",
  styleUrls: ["./greenhouse-emission-show.component.css"]
})
export class GreenhouseEmissionShowComponent implements OnInit {
  yearList: Number[];
  greenhouseEmissions: GreenhouseEmission[];
  dataSourceCurrent: GreenhouseEmission[];
  displayedColumns = [
    "carbon_dioxide",
    "methane",
    "nitrous_dioxide",
    "emission_reason",
    "product",
    "update",
    "delete"
  ];

  constructor(
    private greenhouseEmissionHttpService: GreenhouseEmissionHttpService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initGreenhouseEmission();
    this.initYearList();
  }

  initGreenhouseEmission() {
    this.greenhouseEmissionHttpService
      .getAllGreenhouseEmissions()
      .subscribe(data => {
        this.greenhouseEmissions = data;
        this.changeYearList(TO_YEAR);
      });
  }

  initYearList() {
    this.yearList = this.getListYear(FRORM_YEAR, TO_YEAR);
  }

  getListYear(from: number, to: number) {
    let listYear: Number[] = [];
    for (let i = to; i >= from; --i) {
      listYear.push(i);
    }
    return listYear;
  }

  changeYearList(year: number) {
    this.dataSourceCurrent = this.greenhouseEmissions.filter(
      item => item.year_of_investigation == year
    );
  }

  onDelete(id: number, index: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: "250px",
      data: { title: Value.delete, message: Value.delete_qes }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.onConfirmDelete(id, index);
      }
    });
  }

  onCreate() {
    this.router.navigate([
      RouteNames.ENTERPRISE.GREENHOUSE_EMISSIONS.URL,
      RouteNames.ENTERPRISE.GREENHOUSE_EMISSIONS.CREATE.name
    ]);
  }
  
  onConfirmDelete(id: number, index: number) {
    this.greenhouseEmissionHttpService.deleteFollowId(id).subscribe(data => {
      this.deleteProductInTableDataSource(index);
    });
  }
  deleteProductInTableDataSource(index: number) {
    this.dataSourceCurrent.splice(index, 1);
    this.dataSourceCurrent = [...this.dataSourceCurrent];
  }
}

const FRORM_YEAR = 2000;
const TO_YEAR = new Date().getFullYear();
