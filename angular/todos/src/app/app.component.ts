import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'todos';
  newTodo: string = '';
  todos: Todo[] = [];
  todosPreview : Todo[] = [];
  readonly STORAGE_KEY: string = 'TODO';
  localStorageService: LocalStorageService
  constructor(localStorageService: LocalStorageService){
    this.localStorageService = localStorageService;
    this.todos = this.localStorageService.getElement(this.STORAGE_KEY);
    this.todosPreview = [...this.todos];
  }
  onNewTodoInput(newTodo: string){
    this.newTodo = newTodo;
    console.log(this.newTodo);
    const newObj = {
      title: 'hello',
      done: true
    };
   
  }
  addNewTodo(){
    
    this.todos.push( {
      title: this.newTodo,
      isDone: false
      
    });

    this.newTodo = '';
    this.localStorageService.updateElement(this.STORAGE_KEY, this.todos);
    this.todosPreview = [...this.todos];

  }
  // changeTodoState(index : number){
  //   // this.todos[index].isDone = !this.todos[index].isDone;
  //   console.log(this.todos);  

  // }

  deleteTodo(index: number){
    this.todos.splice(index,1);
    this.todosPreview = [...this.todos];
    this.localStorageService.updateElement(this.STORAGE_KEY, this.todos);
  }
  onSearchInput(searchText: string){
    console.log(searchText);
    console.log(this.todos,'before filter');
    this.todosPreview = this.todos.filter((value,index)=> {
        return value.title.indexOf(searchText) != -1;
    });
    console.log(this.todos,'after filter');
  }
  deleteAllTodos(){
    this.todos = [];
    this.todosPreview = [];
    this.localStorageService.updateElement(this.STORAGE_KEY, this.todos);
  }
  checkboxChange(){
    this.localStorageService.updateElement(this.STORAGE_KEY, this.todos);
  }
}

interface Todo {
  title: string,
  isDone: boolean 
}

