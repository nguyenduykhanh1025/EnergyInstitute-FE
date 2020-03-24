import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouteNames } from "src/app/constant/route-name";
import { AddressHttpService } from "src/app/core/http/address-http.service";
import { Provincial, District, Commune } from "src/app/shared/modules/address";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "src/app/shared/validations/custom-validators";
import { EnterpriseDetail } from "src/app/shared/modules/enterprise-detail";
import { EnterpriseHttpService } from "src/app/core/http/enterprise-http.service";
import { Subject } from "rxjs";
import { get } from "lodash-es";
@Component({
  selector: "app-enterprise-update",
  templateUrl: "./enterprise-update.component.html",
  styleUrls: ["./enterprise-update.component.css"]
})
export class EnterpriseUpdateComponent implements OnInit {
  readonly statusCoordinates = {
    Enter: "true", // nhập tọa độ
    Get: "false" // lấy tọa độ hiện tại
  };

  completeDetail = new Subject<EnterpriseDetail>();

  provincials: Provincial[];
  districts: District[];
  communes: Commune[];
  statusCoordinatesOfEnterprise: any = this.statusCoordinates.Get;
  yearOfInvestigationCurrent: number = new Date().getFullYear();

  updateForm = new FormGroup({
    productionValueForm: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    numberOfEmployeeForm: new FormControl("", [
      Validators.required,
      CustomValidators.onlyNumber
    ]),
    provincialForm: new FormControl("", [Validators.required]),
    districtForm: new FormControl("", [Validators.required]),
    communeForm: new FormControl("", [Validators.required]),
    latForm : new FormControl(""),
    lngForm: new FormControl("")
  });

  constructor(
    private router: Router,
    private addressHttpService: AddressHttpService,
    private eterpriseHttpService: EnterpriseHttpService
  ) {}

  ngOnInit(): void {
    this.initProvincials();
  }

  initProvincials() {
    this.addressHttpService.getAllProvincial().subscribe(data => {
      this.provincials = data;
    });
  }

  handleChangeProvincial(provicial: Provincial) {
    this.getDistrictFollowProvincial(provicial.id);
  }

  handleChangeDistrict(district: District) {
    this.getWardDependProvincealFollowDistrict(district.id);
  }

  getDistrictFollowProvincial(idProvincial: number) {
    this.addressHttpService
      .getDistrictFollowProvincial(idProvincial)
      .subscribe(data => {
        this.districts = data;
      });
  }

  getWardDependProvincealFollowDistrict(idDistrict: number) {
    let idProvincial = this.updateForm.value.provincialForm;
    this.addressHttpService
      .getWardsDependProvincealFollowDistricy(idProvincial, idDistrict)
      .subscribe(data => {
        this.communes = data;
      });
  }

  getValueFollowId(array: any[], id: number) {
    let result = array.find(item => {
      return item.id == id;
    });
    return result.name;
  }

  renturnToEnterpriseDetailShow() {
    this.router.navigate([
      `${RouteNames.ENTERPRISE.url}/${RouteNames.ENTERPRISE.DETAIL.name}`
    ]);
  }

  onSubmit() {
    this.getDataEnterPriseDetailFromUpdateForm();
    this.completeDetail.subscribe(data => {
      this.eterpriseHttpService
        .updateEnterpriseDetail(data)
        .subscribe(data1 => {});
    });
  }

  getDataEnterPriseDetailFromUpdateForm() {
    let enterpriseDetailData: EnterpriseDetail = new EnterpriseDetail();

    enterpriseDetailData.commune = this.getValueFollowId(
      this.communes,
      this.updateForm.value.communeForm
    );
    enterpriseDetailData.district = this.getValueFollowId(
      this.districts,
      this.updateForm.value.districtForm
    );
    enterpriseDetailData.provincial = this.getValueFollowId(
      this.provincials,
      this.updateForm.value.provincialForm
    );
    enterpriseDetailData.production_value = this.updateForm.value.productionValueForm;
    enterpriseDetailData.number_of_employee = this.updateForm.value.numberOfEmployeeForm;
    enterpriseDetailData.year_of_investigation = this.yearOfInvestigationCurrent;

    if (this.statusCoordinatesOfEnterprise == this.statusCoordinates.Get) {
      if (navigator.geolocation) {
        let x, y;
        navigator.geolocation.getCurrentPosition(position => {
          x = get(position, "coords.longitude");
          y = get(position, "coords.latitude");
          enterpriseDetailData.lat = x;
          enterpriseDetailData.lng = y;
          this.completeDetail.next(enterpriseDetailData);
        });
      }
    } else {
      enterpriseDetailData.lat = this.updateForm.value.latForm;
      enterpriseDetailData.lng = this.updateForm.value.lngForm;
      this.completeDetail.next(enterpriseDetailData)
    }
  }
}
