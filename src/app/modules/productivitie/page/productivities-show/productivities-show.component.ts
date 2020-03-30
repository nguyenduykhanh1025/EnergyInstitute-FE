import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductivitieHttpService } from "src/app/core/http/productivitie-http.service";
import { Productivitie } from "src/app/shared/modules/productivitie";
import { MatTableDataSource } from "@angular/material/table";
import { Product } from "src/app/shared/modules/product";
import { ProductHttpService } from "src/app/core/http/product-http.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDeleteDialogComponent } from "src/app/shared/components/confirm-delete-dialog/confirm-delete-dialog.component";
import { Value } from "src/app/constant/string";

@Component({
  selector: "app-productivities-show",
  templateUrl: "./productivities-show.component.html",
  styleUrls: ["./productivities-show.component.css"]
})
export class ProductivitiesShowComponent implements OnInit {
  dataSource: any;
  displayedColumns = ["year_of_investigation", "amount", "update", "delete"];
  product: Product;

  constructor(
    private router: Router,
    private productivitieHttpService: ProductivitieHttpService,
    private productHttpService: ProductHttpService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initProduct();
    this.initDataSourceProductivities();
  }

  initDataSourceProductivities() {
    this.productivitieHttpService
      .getProductivitiesFollowIdProduct(Number(this.getIdProductInUrl()))
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Productivitie>(data);
      });
  }

  initProduct() {
    this.productHttpService
      .getProductFollowId(Number(this.getIdProductInUrl()))
      .subscribe(data => {
        this.product = data;
      });
  }

  onUpdate(id: number) {
    console.log(id);
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

  onConfirmDelete(id: number, index: number) {
    this.productivitieHttpService
      .deleteFollowId(id, this.product.id)
      .subscribe(data => {
        this.deleteProductInTableDataSource(index);
      });
  }

  deleteProductInTableDataSource(index: number) {
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  getIdProductInUrl() {
    return this.router.url.split("/")[this.router.url.split("/").length - 1];
  }
}
