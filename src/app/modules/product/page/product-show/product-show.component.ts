import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/modules/product";
import { ProductHttpService } from "src/app/core/http/product-http.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDeleteDialogComponent } from "src/app/shared/components/confirm-delete-dialog/confirm-delete-dialog.component";
import { Value } from "src/app/constant/string";
import { Router } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";

@Component({
  selector: "app-product-show",
  templateUrl: "./product-show.component.html",
  styleUrls: ["./product-show.component.css"]
})
export class ProductShowComponent implements OnInit {
  dataSource: any;
  displayedColumns = ["id", "name", "update", "delete", "productivitie"];

  constructor(
    private productHttpService: ProductHttpService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts() {
    this.productHttpService.getAllProducts().subscribe(data => {
      this.dataSource = new MatTableDataSource<Product>(data);
    });
  }

  onDeleteProduct(id: number, index: number) {
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

  onCreateProduct() {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.PRODUCT.URL}/${RouteNames.ENTERPRISE.PRODUCT.CREATE.name}`
    ]);
  }

  onConfirmDelete(id: number, index: number) {
    this.productHttpService.deleteProductFollowId(id).subscribe(data => {
      this.deleteProductInTableDataSource(index);
    });
  }

  deleteProductInTableDataSource(index: number) {
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  onUpdate(id: number) {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.PRODUCT.URL}/${RouteNames.ENTERPRISE.PRODUCT.UPDATE.name}/${id}`
    ]);
  }

  onWatchProductivitie(id: number) {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.URL}/${id}`
    ]);
  }
}
