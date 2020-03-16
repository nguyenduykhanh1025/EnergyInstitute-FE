import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteNames } from "./constant/route-name";

const routes: Routes = [
  {
    path: "",
    redirectTo: RouteNames.DASHBOARD.url,
    pathMatch: "full"
  },
  {
    path: RouteNames.AUTH.name,
    data: {title: RouteNames.AUTH.title, showHeader: false, showSidebar: false},
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
