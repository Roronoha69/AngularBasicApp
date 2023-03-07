import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{
  todos: Todo[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/todos').subscribe(
      response => {
        this.todos = response;
      },
      error => {
        console.error('Erreur lors de la récupération des tâches :', error);
      }
    );

    }

 
}
