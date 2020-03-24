import { Routes } from "@angular/router";
import { RouteNames } from 'src/app/constant/route-name'
import { EnterpriseInfomationComponent } from "./page/enterprise-infomation/enterprise-infomation.component";
import { EnterpriseInfomationDetailComponent } from './page/enterprise-infomation-detail/enterprise-infomation-detail.component';
import { EnterpriseUpdateComponent } from './page/enterprise-update/enterprise-update.component';

export const ENTERPRISE_ROUTES: Routes = [
  {
    path: RouteNames.ENTERPRISE.SHOW.name,
    component: EnterpriseInfomationComponent
  },
  {
    path: RouteNames.ENTERPRISE.DETAIL.name,
    component: EnterpriseInfomationDetailComponent
  },
  {
    path: RouteNames.ENTERPRISE.UPDATE.name,
    component: EnterpriseUpdateComponent
  }
];
