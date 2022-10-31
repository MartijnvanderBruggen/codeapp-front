import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: "app-create-code-snippet",
  templateUrl: "./create-code-snippet.component.html",
  styleUrls: ["./create-code-snippet.component.scss", "../app.component.scss"],
})
export class CreateCodeSnippetComponent implements OnInit {
  title: string = "title";
  content: string = "Content";
  snippetForm = this.fb.group({
    title: ["", Validators.required],
    content: ["", Validators.required],
  });

  @Input() hide: boolean = true;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      //Authorization: 'my-auth-token'
    }),
  };
  ngOnInit(): void {}

  create() {
    return this.http.post<any>(
      "http://localhost:8000/codeSnippets",
      this.snippetForm.value,
      this.httpOptions
    );
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.snippetForm.value);
    this.create().subscribe((data) => console.log(data));
  }
}
