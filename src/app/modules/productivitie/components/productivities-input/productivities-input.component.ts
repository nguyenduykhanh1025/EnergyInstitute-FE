import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Productivitie } from "src/app/shared/modules/productivitie";
import { Router, ActivatedRoute } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { map } from "rxjs/operators";
import { Value } from "src/app/constant/string";

@Component({
  selector: "app-productivities-input",
  templateUrl: "./productivities-input.component.html",
  styleUrls: ["./productivities-input.component.css"]
})
export class ProductivitiesInputComponent implements OnInit {
  @Input() formData: FormGroup;
  @Output() poductivitieOutput = new EventEmitter<Productivitie>();
  @Input() status: string;

  yearList: Number[];
  statusDisabledYearOfInvent: Boolean;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initYearList();
    this.initStatusDisabledYearOfInvent();
  }

  initStatusDisabledYearOfInvent() {
    this.statusDisabledYearOfInvent =
      this.status == Value.update ? true : false;
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

  onOutput() {
    this.poductivitieOutput.emit(this.formData.value as Productivitie);
  }

  onReturn() {
    this.getProductIdFromUrl().subscribe(product_id => {
      this.router.navigate([
        RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.URL,
        product_id
      ]);
    });
  }

  getProductIdFromUrl() {
    return this.route.paramMap.pipe(
      map(paramMap => paramMap.get(Value.product_id))
    );
  }
}
const FRORM_YEAR = 2000;
const TO_YEAR = new Date().getFullYear();
