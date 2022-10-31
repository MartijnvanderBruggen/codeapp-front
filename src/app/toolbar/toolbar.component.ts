import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  hide: boolean = true;
  @Output() toggleEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.hide = !this.hide;

    this.toggleEvent.emit(this.hide);
  }
}
