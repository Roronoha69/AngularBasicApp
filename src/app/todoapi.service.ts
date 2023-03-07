import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoapiService {
  todos: Todo[] = [];
  
  constructor(private http: HttpClient) { }

}
