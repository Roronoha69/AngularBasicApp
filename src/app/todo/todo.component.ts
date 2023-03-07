import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo?: Todo;
  constructor(
    private http: HttpClient
  ) {}

  updateDone(todo:any){
    
    const updates = { done: !todo.done };
     
      this.http.put<any>(`http://localhost:3000/todos/${todo.id}`, updates).subscribe(
        // response => {
        //   this.todo = response;
        // },
        error => {
          console.error('Erreur lors de la mise à jour de la tâche :', error);
        }
      );  
  }


}
