import { EventEmitter, Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class JwtService {
  readonly keyJWT = "jwt";
  currentUser = new EventEmitter<String>();

  constructor(public jwtHelper: JwtHelperService) {}

  getJWT(): string {
    return window.localStorage[this.keyJWT];
  }

  saveJWT(token: string) {
    window.localStorage[this.keyJWT] = token;
  }

  destroyToken() {
    window.localStorage.removeItem(this.keyJWT);
  }

  isTokenExpired() {
    return this.jwtHelper.isTokenExpired(this.getJWT());
  }

  tokenPayLoad(): any {
    return this.jwtHelper.decodeToken(this.getJWT());
  }

  handleSaveTokenLoginCompany(token: string) {
    this.saveJWT(token);
    this.emitCurrentUser(this.jwtHelper.decodeToken(token).user);
  }

  emitCurrentUser(payload: String) {
    this.currentUser.emit(payload);
  }
}
