import { AuthorDetailsComponent } from './author-details/author-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TodosListComponent } from './todos-list/todos-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { AuthorLayoutComponent } from './author-layout/author-layout.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { TodoLayoutComponent } from './todo-layout/todo-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  {path:'', redirectTo: 'todos', pathMatch:'full'},
  {path: 'todos', component:  TodoLayoutComponent, children: [
    {path:'', component: TodosListComponent},
 

  ]},
  {path:'company', component: AuthorLayoutComponent, children: [
    {path:'', component: AuthorsListComponent },
    {path:':id', component: AuthorDetailsComponent }
  ]}

]
@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    AuthorDetailsComponent,
    AuthorLayoutComponent,
    AuthorsListComponent,
    TodoLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
