import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todos/todo.service';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() modalClosed = new EventEmitter<void>()
  constructor(private todoService: TodoService) { }
  enteredTitle = ""

  onClosed() {
    this.modalClosed.emit()
  }

  onSaveTodo() {
    if (this.enteredTitle.trim() !== "") {
      this.todoService.addTodo(this.enteredTitle);
      this.enteredTitle = "";
      this.modalClosed.emit(); 
    }
  }  
}
