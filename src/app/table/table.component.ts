import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { CodeSnippet } from "../code-snippet";
import { map } from "rxjs/operators";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnDestroy, OnInit {
  CodeSnippets: CodeSnippet[] = [];
  displayedColumns: string[] = ["id", "title", "actions"];
  dataSource = this.CodeSnippets;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get<CodeSnippet[]>("http://localhost:8000/codeSnippets")
      .subscribe((data) => {
        this.CodeSnippets = (data as any).data;
      });
  }

  delete(element: any) {
    this.httpClient
      .delete<CodeSnippet>("http://localhost:8000/codeSnippets/" + element.id)
      .subscribe((data) => {
        console.log("deleted");
      });
  }

  edit(element: any) {
    //open modal
  }
  view(element: any) {
    //open modal
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
  }
}
