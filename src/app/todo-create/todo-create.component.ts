import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent {
  newTodo: any;
  @Input() todo?: Todo;
  todos: Todo[] = [];

  constructor(private http: HttpClient){}

  createTodo(){
    const updates = { name: this.newTodo };
      
      this.http.post<any>(`http://localhost:3000/todos`, updates).subscribe(
        response => {
          this.todos.push(response)
        },
        error => {
          console.error('Erreur lors de la mise à jour de la tâche :', error);
        }
      );
  }
}
