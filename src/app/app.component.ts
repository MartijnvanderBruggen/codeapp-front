import { Component, EventEmitter, HostListener, Output } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-app";

  hide: boolean = true;

  toggle(hide: boolean) {
    this.hide = hide;
  }
}
