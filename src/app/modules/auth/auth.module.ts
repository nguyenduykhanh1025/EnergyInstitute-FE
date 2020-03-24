import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AUTH_ROUTES } from "./auth.routes";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AuthModule {}
