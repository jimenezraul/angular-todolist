import { Component, Input } from '@angular/core';
import { ContainerComponent } from "../../shared/container/container.component";
import { TodosComponent } from "../../shared/todos/todos.component";
import { type Todos, todos } from '../../shared/todos/todo.model';
import { TodoDetailComponent } from "../../shared/todo-detail/todo-detail.component";
import { ModalComponent } from "../../shared/modal/modal.component";

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, TodosComponent, TodoDetailComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openModal = false;
  selectedTodo: Todos | undefined;
  @Input() todoList: Todos[] = todos

  onSelected(id: string) {
    this.selectedTodo = this.todoList.find((todo) => todo.id === id)
  }

  onModalOpenOrClose() {
    this.openModal = !this.openModal
  }
}
