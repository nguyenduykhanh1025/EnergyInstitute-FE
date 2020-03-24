import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EnterpriseInfomationComponent } from "./page/enterprise-infomation/enterprise-infomation.component";
import { EnterpriseInfomationCommonComponent } from "./components/enterprise-infomation-common/enterprise-infomation-common.component";
import { ENTERPRISE_ROUTES } from "./enterprise-routing.module";
import { EnterpriseInfomationDetailComponent } from "./page/enterprise-infomation-detail/enterprise-infomation-detail.component";
import { EnterpriseDetailComponent } from "./components/enterprise-detail/enterprise-detail.component";
import { EnterpriseUpdateComponent } from "./page/enterprise-update/enterprise-update.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    EnterpriseInfomationComponent,
    EnterpriseInfomationCommonComponent,
    EnterpriseInfomationDetailComponent,
    EnterpriseDetailComponent,
    EnterpriseUpdateComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ENTERPRISE_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnterpriseModule {}
