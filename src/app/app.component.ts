import { Component, OnInit } from "@angular/core";
import { AuthService } from "./core/authentication/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "EnergyInstitute-FE";

  constructor(private authService: AuthService) {}
  ngOnInit() {}

  handleStatusOpenLayoutNavbarFollowUserLogin() {
    if (this.authService.isLoggedOut()) {
      return false;
    } else {
      return true;
    }
  }
}
