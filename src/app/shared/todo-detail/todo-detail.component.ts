import { Component, inject } from '@angular/core';
import { TodoService } from '../todos/todo.service';


@Component({
  selector: 'app-todo-detail',
  standalone: false,
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {
  constructor(private todoService: TodoService) { }

  get todoDetail() {
    return this.todoService.getSelectedTodo();
  }

  removeTodo(id: string) {
    this.todoService.removeTodo(id)
  }
}
