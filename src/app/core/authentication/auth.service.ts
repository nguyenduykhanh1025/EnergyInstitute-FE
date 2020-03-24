import { Injectable } from "@angular/core";
import { JwtService } from "../services/jwt.service";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { RouteNames } from "../../constant/route-name";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public userSignedIn = new BehaviorSubject(false);
  private readonly redirectKey = "redirectUrl";

  constructor(private jwtService: JwtService, private router: Router) {
    if (this.isAuthenticated()) {
      this.emitUserSignedIn(this.isAuthenticated());
    } else {
      this.emitUserSignedIn(this.isAuthenticated());
    }
  }

  isAuthenticated(): boolean {
    return !this.jwtService.isTokenExpired();
  }

  emitUserSignedIn(userSignedIn: boolean) {
    this.userSignedIn.next(userSignedIn);
  }

  setRedirectUrl(url: string) {
    localStorage.setItem(this.redirectKey, url);
  }
  getRedirectUrl(): string | null {
    return localStorage.getItem(this.redirectKey);
  }
  clearRedirectUrl() {
    localStorage.removeItem(this.redirectKey);
  }

  logout() {
    this.jwtService.destroyToken();
    this.router.navigate([
      `${RouteNames.AUTH.name}/${RouteNames.AUTH.login.name}`
    ]);
  }

  isLoggedOut() {
    if (!this.jwtService.getJWT()) {
      return true;
    }
    return false;
  }
}
