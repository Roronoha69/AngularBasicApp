import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {
  
  todo: any;

  updatedName: any;
  toUpdate: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any[]>(`http://localhost:3000/todos/${id}`).subscribe(
    
      response => {
        this.todo = response;

      },
      error => {
        console.error('Erreur lors de la récupération des tâches :', error);
      }
    );

    }

    updateTodo(): void {
      const updates = { name: this.updatedName };
      const id = this.todo.id;
      this.http.put<any>(`http://localhost:3000/todos/${id}`, updates).subscribe(
        response => {
          this.todo = response;
        },
        error => {
          console.error('Erreur lors de la mise à jour de la tâche :', error);
        }
      );
    }

    showInput(){
      this.toUpdate = true
    }

    onDelete() {
      const id = this.todo.id;
      this.http.delete<any>(`http://localhost:3000/todos/${id}`, id).subscribe(
        
        error => {
          console.error('Erreur lors de la mise à jour de la tâche :', error);
        }
      );
      window.location.href = "/todos"
    }
  

}
