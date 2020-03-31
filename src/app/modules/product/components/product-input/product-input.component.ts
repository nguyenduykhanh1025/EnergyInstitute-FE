import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { Product } from "src/app/shared/modules/product";
import { RouteNames } from "src/app/constant/route-name";
import { ConfirmationDialogComponent } from "src/app/shared/components/confirmation-dialog/confirmation-dialog.component";
import { Value } from "src/app/constant/string";

@Component({
  selector: "app-product-input",
  templateUrl: "./product-input.component.html",
  styleUrls: ["./product-input.component.css"]
})
export class ProductInputComponent implements OnInit {
  @Input() formData: FormGroup;
  @Output() productOutput = new EventEmitter<Product>();
  @Input() status: String;

  statusString = Value.post;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  onCreateProduct() {
    this.productOutput.emit(this.formData.value as Product);
  }

  onReturn() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "250px",
      data: { title: Value.return, message: Value.return_qes }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.router.navigate([
          `${RouteNames.ENTERPRISE.PRODUCT.URL}/${RouteNames.ENTERPRISE.PRODUCT.SHOW.name}`
        ]);
      }
    });
  }
}
