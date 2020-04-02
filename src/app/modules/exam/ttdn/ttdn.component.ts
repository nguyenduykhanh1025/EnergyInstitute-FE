import { Component, OnInit, ViewChild } from "@angular/core";
import { EnergyConsumption } from "src/app/shared/modules/energy_consumption";
import { EnergyConsumptionsHttpService } from "src/app/core/http/energy-consumptions-http.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ReadFile, TTDN } from 'src/app/core/http/read-file.service';

@Component({
  selector: "app-ttdn",
  templateUrl: "./ttdn.component.html",
  styleUrls: ["./ttdn.component.css"]
})
export class TTDNComponent implements OnInit {
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
    // "update",
    // "delete",
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  arrayBuffer: any;
  file: File;
  filelist: any;

  constructor(
    private energyConsumptionsHttpService: EnergyConsumptionsHttpService,
    private readFile: ReadFile
  ) {}

  ngOnInit(): void {
    // this.initDataSource();
    this.initData();
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

  initData() {
    this.readFile.getTTDN().subscribe(data => {
      this.dataSource = new MatTableDataSource<TTDN>(data);
      console.log(data);
      
        this.dataSource.paginator = this.paginator;
        // if (data[0] != null) {
        //   this.dataSourceCurrent = data[0];
        // }
    })
  }

  // addfile(event) {
  //   this.file = event.target.files[0];

  //   let fileReader = new FileReader();
  //   fileReader.onload = e => {
  //     this.arrayBuffer = fileReader.result;
  //     var data = new Uint8Array(this.arrayBuffer);
  //     var arr = new Array();
  //     for (var i = 0; i != data.length; ++i)
  //       arr[i] = String.fromCharCode(data[i]);
  //     var bstr = arr.join("");
  //     var workbook = XLSX.read(bstr, { type: "binary" });
  //     var first_sheet_name = workbook.SheetNames[2];
  //     var worksheet = workbook.Sheets[first_sheet_name];

  //     let excelRows = XLSX.utils.sheet_to_json(worksheet);
  //     console.log(excelRows[4]);
      
  //   };
  //   fileReader.readAsArrayBuffer(this.file); 
  // }
}
