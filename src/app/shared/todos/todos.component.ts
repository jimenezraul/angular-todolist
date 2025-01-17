import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  private todoService = inject(TodoService);

  onSelectedTodo(id: string) {
    const todo = this.todoService.getTodos().find((t) => t.id === id);
    if (todo) {
      this.todoService.setSelectedTodo(todo);
    }
  }

  allTodos() {
    return this.todoService.getTodos();
  }
}
