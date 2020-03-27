import { Component, OnInit, ViewChild } from "@angular/core";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { Router } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { Value } from "src/app/constant/string";
import { ConfirmDeleteDialogComponent } from "src/app/shared/components/confirm-delete-dialog/confirm-delete-dialog.component";
import { CustomSnackbarService } from "src/app/core/services/custom-snackbar.service";

@Component({
  selector: "app-energy-consumptions-show",
  templateUrl: "./energy-consumptions-show.component.html",
  styleUrls: ["./energy-consumptions-show.component.css"]
})
export class EnergyConsumptionsShowComponent implements OnInit {
  dataSource: any;
  dataSourceCurrent: EnergyConsumption;
  displayedColumns = [
    "year_of_investigation",
    "self_produced_electricity",
    "consumption_electricity",
    "coal",
    "bitum_coal",
    "coke_coal",
    "dust_coal",
    "ko",
    "do",
    "fo",
    "lpg",
    "ng",
    "biomass_energy",
    "renewable_energy",
    "update",
    "delete"
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private energyConsumptionsHttpService: EnergyConsumptionsHttpService,
    private router: Router,
    public dialog: MatDialog,
    public snackbarService: CustomSnackbarService
  ) {}

  ngOnInit() {
    this.initDataSource();
  }

  initDataSource() {
    this.energyConsumptionsHttpService
      .getAllEnnergyConsumptions()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<EnergyConsumption>(data);
        this.dataSource.paginator = this.paginator;
        if (data[0] != null) {
          this.dataSourceCurrent = data[0];
        }
      });
  }

  getDataSourceCurrentFollowYearOfInvestigation(
    year_of_investigation: number
  ): EnergyConsumption {
    if (this.dataSource != null) {
      return this.dataSource.find(item => {
        return item.year_of_investigation == year_of_investigation;
      });
    }
  }

  handleChangeYearOfInvestigation(year_of_investigation: number) {
    this.dataSourceCurrent = this.getDataSourceCurrentFollowYearOfInvestigation(
      year_of_investigation
    );
  }

  onCreateEnergyConsumption() {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL}/${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.CREATE.name}`
    ]);
  }

  onClickUpdate(id: number) {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL}/${RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.UPDATE.name}/${id}`
    ]);
  }

  onClickDelete(id: number, index: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: "250px",
      data: { title: Value.delete, message: Value.delete_qes }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.confirmDeleteEnergyConsumptions(id, index);
      }
    });
  }
  
  confirmDeleteEnergyConsumptions(id: number, index: number) {
    this.deleteEnergyConsumptions(id);
    this.deleteEnergyConsumptionsInDatasource(index);
  }

  deleteEnergyConsumptions(id: number) {
    this.energyConsumptionsHttpService.deleteFollowId(id).subscribe();
  }

  deleteEnergyConsumptionsInDatasource(index: number) {
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }
}
