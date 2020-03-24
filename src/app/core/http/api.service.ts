import { Value } from "../../constant/string";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CustomSnackbarService } from "../services/custom-snackbar.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
    
  constructor(
    private http: HttpClient,
    private customSnackbarService: CustomSnackbarService
  ) {}

  get(
    path: string,
    params: HttpParams = new HttpParams(),
    headers?: HttpHeaders
  ): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, { headers, params })
      .pipe(map((response: any) => response.data));
  }

  put(path: string, body: Object = {}): Observable<any> {
    console.log(body);
    
    return this.http
      .put(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe(
        map((response: any) => {
          this.customSnackbarService.success(Value.action_success);
          return response.data;
        })
      );
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http
      .patch(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe(
        map((response: any) => {
          this.customSnackbarService.success(Value.action_success);
          return response.data;
        })
      );
  }

  post(path: string, body: Object = {}, options?): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body), options)
      .pipe(
        map((response: any) => {
          this.customSnackbarService.success(Value.action_success);
          return response.data;
        })
      );
  }

  delete(path): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`).pipe(
      map((response: any) => {
        this.customSnackbarService.success(Value.action_success);
        return response.data;
      })
    );
  }
}
