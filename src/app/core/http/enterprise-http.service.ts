import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { JwtService } from "../services/jwt.service";
import { Router } from "@angular/router";
import { Enterprise } from "src/app/shared/modules/enterprise";
import { EnterpriseDetail } from "src/app/shared/modules/enterprise-detail";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EnterpriseHttpService {
  readonly enterprisesUri = "enterprise";

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  getInfomationEnterpriseCurrent(): Observable<Enterprise> {
    return this.apiService
      .get(this.enterprisesUri)
      .pipe(map(res => res.enterprise));
  }

  getALlInfomationEnterpriseDetailCurrent(): Observable<EnterpriseDetail[]> {
    return this.apiService
      .get(this.enterprisesUri)
      .pipe(map(res => res.enterprise_details));
  }

  updateEnterpriseDetail(data: EnterpriseDetail): Observable<Enterprise> {
    return this.apiService
      .put(this.enterprisesUri, data)
      .pipe(map(res => res.enterprise_details));
  }
}
