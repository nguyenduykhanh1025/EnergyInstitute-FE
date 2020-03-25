import { Component, OnInit, ViewChild } from "@angular/core";
import { EnterpriseHttpService } from "src/app/core/http/enterprise-http.service";
import { EnterpriseDetail } from "src/app/shared/modules/enterprise-detail";
import { RouteNames } from "src/app/constant/route-name";
import { Router } from "@angular/router";

@Component({
  selector: "app-enterprise-detail",
  templateUrl: "./enterprise-detail.component.html",
  styleUrls: ["./enterprise-detail.component.css"]
})
export class EnterpriseDetailComponent implements OnInit {
  enterpriseDetails: EnterpriseDetail[];
  enterpriseDetailsCurrent: EnterpriseDetail;
  uriGGMapEmbed: String = "";

  constructor(
    private enterpriseHttpService: EnterpriseHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEnterpriseDetailFollowYear();
  }

  getEnterpriseDetailFollowYear() {
    this.enterpriseHttpService
      .getALlInfomationEnterpriseDetailCurrent()
      .subscribe(data => {
        this.enterpriseDetails = data;
        this.initEnterpriseDetailsCurrent(data[0]);
      });
  }

  initEnterpriseDetailsCurrent(enterpriseDetailsCurrent: EnterpriseDetail) {
    this.enterpriseDetailsCurrent = enterpriseDetailsCurrent;
    this.setUriGGMapEmbed(
      enterpriseDetailsCurrent.lat,
      enterpriseDetailsCurrent.lng
    );
  }

  changeYearOfInvestigation(year: number) {
    this.enterpriseDetailsCurrent = this.enterpriseDetails.find(item => {
      return item.year_of_investigation == year;
    });
    this.setUriGGMapEmbed(
      this.enterpriseDetailsCurrent.lat,
      this.enterpriseDetailsCurrent.lng
    );
  }

  renturnToEnterpriseShow() {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.url}/${RouteNames.ENTERPRISE.SHOW.name}`
    ]);
  }

  goToUpdateInfomation() {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.url}/${RouteNames.ENTERPRISE.UPDATE.name}`
    ]);
  }
  setUriGGMapEmbed(lat: number, lng: number) {
    this.uriGGMapEmbed = `http://maps.google.com/maps?q=${lat}, ${lng}&z=16&output=embed`;
  }
}
