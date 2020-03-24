import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { CustomSnackbarService } from "../services/custom-snackbar.service";
import { CodeError } from "../../constant/error-code";
import { ActivatedRoute, Router } from "@angular/router";
import { JwtService } from "../services/jwt.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    public snackbarService: CustomSnackbarService,
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        let status = 0;
        let codeError = 0;
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          status = error.status;
          if (status === 500) {
            errorMessage = "Lỗi hệ thống";
          } else {
            codeError = error.error.code;
            errorMessage = error.error.message;
          }
          this.handleCodeError(codeError);
        }
        this.snackbarService.warning(errorMessage, status);
        return throwError(errorMessage);
      })
    );
  }

  handleCodeError(codeError: number) {
    switch (codeError) {
      case CodeError.TokenInvalid:
      case CodeError.TokenExpired:
        this.redirectToLogin();
        break;
      default:
        break;
    }
  }

  private redirectToLogin() {
    this.jwtService.destroyToken();
    this.router.navigateByUrl("/auth/login");
  }
}
