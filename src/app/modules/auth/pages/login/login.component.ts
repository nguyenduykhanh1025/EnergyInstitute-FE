import { Component, OnInit } from "@angular/core";
import { AuthHttpService } from "src/app/core/http/auth-http.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authHttpService: AuthHttpService) {}

  ngOnInit(): void {}

  login(email: String, password: String) {
    let auth = {
      email: email,
      password: password
    };
    this.authHttpService.sendLoginRequest(auth);
  }
}
