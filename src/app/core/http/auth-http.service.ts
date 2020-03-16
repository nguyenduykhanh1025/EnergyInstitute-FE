import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { JwtService } from "../services/jwt.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthHttpService {
  readonly authUri = "auth";
  readonly uri = {
    login: `${this.authUri}/sign_in`
  };

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  sendLoginRequest(user: Object = {}) {
    return this.apiService.post(this.uri.login, user).subscribe(data => {
      this.jwtService.saveJWT(data.token);
      this.router.navigate(["/"]);
    });
  }
}
