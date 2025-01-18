import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private selectedTodo: Todo | null = null;
    private todos: Todo[] = [];

    constructor() {
        const todos = localStorage.getItem('todos')

        if (todos) {
            this.todos = JSON.parse(todos)
        }
    }

    // Get all todos
    getTodos(): Todo[] {
        return this.todos;
    }

    // Add a new todo
    addTodo(todo: string): void {
        const id = this.generateId()
        const now = new Date().getTime().toString()

        const newTodos = {
            id: id,
            todo: todo,
            date: now
        }
        this.todos.push(newTodos);
        this.saveTodo()
    }

    // Remove a todo by id
    removeTodo(id: string): void {
        this.todos = this.todos.filter((todo) => todo.id !== id)
        this.selectedTodo = null
        this.saveTodo()
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

    private saveTodo = (): void => {
        localStorage.setItem("todos", JSON.stringify(this.todos))
    }

    private generateId = (): string => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            id += characters[randomIndex];
        }
        return id;
    }
}
