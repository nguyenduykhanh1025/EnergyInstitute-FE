import {
  CanActivate,
  CanLoad,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../authentication/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    const url = state.url;
    this.authService.setRedirectUrl(url);
    this.router.navigate(["/auth/login"]);
    return false;
  }
}
