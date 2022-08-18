import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnsToDisplay = ["author","names",'authorId']
  data: MatTableDataSource<Post> = new MatTableDataSource<Post>(
    [
    {
      name: 'hello world',
      id: 1,
      author: 'joseph',
      authorId: 1
    },
    {
      name: 'hello world 2',
      id: 2,
      author: 'joseph',
      authorId: 1
    },
    {
      name: 'hello world 3',
      id: 3,
      author: 'ahmad',
      authorId: 2
    }

  ]);
  title = 'angular-material';
  log(event: Post){
    console.log(event);
  }
  filterTable(searchTerm: string){
      this.data.filter = searchTerm;
  }
}

interface Post {
  name: string,
  id: number, 
  author: string,
  authorId: number
}
