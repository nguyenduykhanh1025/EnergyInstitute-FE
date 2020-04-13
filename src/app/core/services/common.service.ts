import { Injectable } from "@angular/core";
import { Value } from "src/app/constant/string";
import { AddressHttpService } from "src/app/core/http/address-http.service";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private addressHttpService: AddressHttpService) {}

  getListYear() {
    let listYearResult = [];
    for (let item = Value.TO_YEAR; item >= Value.FROM_YEAR; --item) {
      listYearResult.push(item);
    }
    return listYearResult;
  }
}
