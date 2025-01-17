import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from './todo.model';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  @Output() selectedTodo = new EventEmitter<string>();
  @Input({ required: true }) todoList: Todos[] = []

  onSelectedTodo(id: string) {
    this.selectedTodo.emit(id)
  }
}
