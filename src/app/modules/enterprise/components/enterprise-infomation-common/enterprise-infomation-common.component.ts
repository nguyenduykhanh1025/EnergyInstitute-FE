import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EnterpriseHttpService } from "src/app/core/http/enterprise-http.service";
import { Enterprise } from "src/app/shared/modules/enterprise";
import { RouteNames } from "src/app/constant/route-name";
@Component({
  selector: "app-enterprise-infomation-common",
  templateUrl: "./enterprise-infomation-common.component.html",
  styleUrls: ["./enterprise-infomation-common.component.css"]
})
export class EnterpriseInfomationCommonComponent implements OnInit {
  enterpriseInfomation: Enterprise;

  constructor(
    private router: Router,
    private enterpriseHttpService: EnterpriseHttpService
  ) {}

  ngOnInit(): void {
    this.getInfomationEnterprise();
  }

  getInfomationEnterprise() {
    this.enterpriseHttpService
      .getInfomationEnterpriseCurrent()
      .subscribe(data => {
        this.enterpriseInfomation = data;
      });
  }
  onClickInfomationDetail() {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.url}/${RouteNames.ENTERPRISE.DETAIL.name}`
    ]);
  }
}
