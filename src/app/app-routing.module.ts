import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteNames } from "./constant/route-name";
import { AuthGuard } from "src/app/core/guards/auth.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: RouteNames.ENTERPRISE.PRODUCT.URL},
  //EXAM
  {
    path: "v1",
    data: {
      title: RouteNames.AUTH.title,
      showHeader: false,
      showSidebar: false
    },
    loadChildren: () =>
      import("./modules/exam/exam.module").then(m => m.ExamModule)
  },
  
  {
    path: RouteNames.ENTERPRISE.url,
    data: {
      title: RouteNames.AUTH.title,
      showHeader: false,
      showSidebar: false
    },
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/enterprise/enterprise.module").then(
        m => m.EnterpriseModule
      )
  },
  {
    path: RouteNames.ENTERPRISE.ENERGY_CONSUMPTIONS.URL,
    data: {
      title: RouteNames.AUTH.title,
      showHeader: false,
      showSidebar: false
    },
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/energy-consumptions/energy-consumptions.module").then(
        m => m.EnergyConsumptionsModule
      )
  },
  {
    path: RouteNames.ENTERPRISE.PRODUCT.URL,
    data: {
      title: RouteNames.AUTH.title,
      showHeader: false,
      showSidebar: false
    },
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/product/product.module").then(m => m.ProductModule)
  },
  {
    path: RouteNames.ENTERPRISE.PRODUCT.PRODUCTIVITIE.URL,
    data: {
      title: RouteNames.AUTH.title,
      showHeader: false,
      showSidebar: false
    },
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/productivitie/productivitie.module").then(
        m => m.ProductivitieModule
      )
  },
  {
    path: RouteNames.ENTERPRISE.GREENHOUSE_EMISSIONS.URL,
    data: {
      title: RouteNames.AUTH.title,
      showHeader: false,
      showSidebar: false
    },
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/greenhouse-emissions/greenhouse-emissions.module").then(
        m => m.GreenhouseEmissionsModule
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
