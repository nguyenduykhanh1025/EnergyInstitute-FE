import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteNames } from "./constant/route-name";

const routes: Routes = [
  {
    path: RouteNames.ENTERPRISE.url,
    data: {
      title: RouteNames.AUTH.title,
      showHeader: false,
      showSidebar: false
    },
    loadChildren: () =>
      import("./modules/enterprise/enterprise.module").then(
        m => m.EnterpriseModule
      )
  },
  {
    path: RouteNames.AUTH.name,
    data: {
      title: RouteNames.AUTH.title,
      showHeader: false,
      showSidebar: false
    },
    loadChildren: () =>
      import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL,
    data: {
      title: RouteNames.AUTH.title,
      showHeader: false,
      showSidebar: false
    },
    loadChildren: () =>
      import("./modules/energy-consumptions/energy-consumptions.module").then(
        m => m.EnergyConsumptionsModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
