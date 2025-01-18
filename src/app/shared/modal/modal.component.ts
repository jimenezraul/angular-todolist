import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../todos/todo.service';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() modalClosed = new EventEmitter<void>()
  constructor(private todoService: TodoService) { }
  enteredTitle = ""
  error = ""

  onClosed() {
    this.modalClosed.emit()
  }

  onSaveTodo() {
    if (this.enteredTitle.trim() !== "") {
      this.todoService.addTodo(this.enteredTitle);
      this.enteredTitle = "";
      this.error = ""
      this.modalClosed.emit();
    } else {
      this.error = "Please enter a todo.";
    }
  }
}
