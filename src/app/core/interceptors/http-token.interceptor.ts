import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtService } from "../services/jwt.service";
import { InterceptorSkipContentType } from "../../constant/header-http";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headersConfig = {
      Accept: "application/json"
    };
    if (!req.headers.has(InterceptorSkipContentType)) {
      headersConfig["Content-Type"] = "application/json";
    }

    if (this.inWhiteList(req)) {
      return next.handle(req);
    }

    const token = this.jwtService.getJWT();

    if (token) {
      headersConfig["Authorization"] = `Token ${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }

  inWhiteList(req: HttpRequest<any>): boolean {
    const url = req.url;
    const whiteList = ["auth/sign_in", "auth/signup", "assets"];

    whiteList.forEach(allowURI => {
      if (url.indexOf(allowURI) > -1) {
        return true;
      }
    });
    return false;
  }
}
