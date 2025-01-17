import { Component, Input } from '@angular/core';
import { Todos } from '../todos/todo.model';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {
  @Input({ required: true }) todoDetail!: Todos
}
