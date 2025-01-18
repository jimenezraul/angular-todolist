import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  standalone: false,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  constructor(private todoService: TodoService) { }

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
