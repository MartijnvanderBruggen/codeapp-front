import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CodeSnippet } from '../code-snippet';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  CodeSnippets: CodeSnippet[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.httpClient.get<CodeSnippet[]>('http://localhost:8000/codeSnippets')
      .subscribe(data => {
        this.CodeSnippets = (data as any).data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next(void 0);
      });
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
