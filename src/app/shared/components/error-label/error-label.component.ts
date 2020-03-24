import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-error-label",
  templateUrl: "./error-label.component.html",
  styleUrls: ["./error-label.component.css"]
})
export class ErrorLabelComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}
}
