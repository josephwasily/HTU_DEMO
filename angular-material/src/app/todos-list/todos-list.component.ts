import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'completed', 'user']
  data: MatTableDataSource<Todo> = new MatTableDataSource<Todo>([]);
  constructor(private httpClient: HttpClient) {

   }  

  ngOnInit(): void {
    
    this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .subscribe((obs)=> {
      this.data.data = obs;
    });
  }



}
export interface Todo {
  userId:    number;
  id:        number;
  title:     string;
  completed: boolean;
}
