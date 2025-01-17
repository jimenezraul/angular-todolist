import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private selectedTodo: Todo | null = null;
    private todos: Todo[] = [
        {
            id: '1',
            todo: "Groceries",
            date: 'Jan 19 2025',
        },
        {
            id: '2',
            todo: "Gas",
            date: 'Jan 20 2025',
        }
    ];

    constructor() { }

    // Get all todos
    getTodos(): Todo[] {
        return this.todos;
    }

    // Add a new todo
    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }

    // Remove a todo by id
    removeTodo(id: string): void {
        this.todos = this.todos.filter((todo) => todo.id !== id)
        this.selectedTodo = null
    }

    // Find a todo by value
    findTodo(id: string): Todo | null {
        const found = this.todos.find((item: Todo) => item.id === id);
        return found || null; // Returns the found todo or null if not found
    }

    // Clear all todos
    clearTodos(): void {
        this.todos = [];
    }

    setSelectedTodo(todo: Todo) {
        this.selectedTodo = todo;
    }

    getSelectedTodo() {
        return this.selectedTodo;
    }
}
