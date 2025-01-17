import { Component, inject } from '@angular/core';
import { TodoService } from '../todos/todo.service';


@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {
  private todoService = inject(TodoService);

  get todoDetail() {
    return this.todoService.getSelectedTodo();
  }

  onDelete(id: string) {
    this.todoService.removeTodo(id)
  }
}
