import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-code-snippet',
  templateUrl: './create-code-snippet.component.html',
  styleUrls: ['./create-code-snippet.component.scss']
})
export class CreateCodeSnippetComponent implements OnInit {
  
  title = new FormControl('');
  content = new FormControl('')
  
  constructor(private http: HttpClient) { }
  
  public  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      //Authorization: 'my-auth-token'
    })
  };
  ngOnInit(): void {
  }

  create() {
    return this.http.post<any>('http://localhost:8000/codeSnippets',JSON.stringify({ title: this.title, content: this.content}),this.httpOptions)
  }

  send() {
    console.log('test')
    this.create().subscribe((data)=> console.log(data));
  }

}

