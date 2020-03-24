import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { Provincial, District, Commune } from "src/app/shared/modules/address";
import { map } from "rxjs/operators";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AddressHttpService {
  readonly uri = {
    city: "provinces",
    district: "districts",
    ward: "wards"
  };

  constructor(private apiService: ApiService) {}

  getAllProvincial(): Observable<Provincial[]> {
    return this.apiService.get(this.uri.city).pipe(map(res => res.provinces));
  }

  getDistrictFollowProvincial(idProvincial: number): Observable<District[]> {
    let uri = `${this.uri.city}/${idProvincial}/${this.uri.district}`;
    return this.apiService.get(uri).pipe(map(res => res.districts));
  }

  getWardsDependProvincealFollowDistricy(
    idProvincial: number,
    idDistrict: number
  ) {
    let uri = `${this.uri.city}/${idProvincial}/${this.uri.district}/${idDistrict}/${this.uri.ward}`;
    return this.apiService.get(uri).pipe(map(res => res.wards));
  }
}
