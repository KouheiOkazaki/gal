'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Todo, TodoStatus } from '../types/todo';

interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
  updateTodoStatus: (id: string, status: TodoStatus) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (title) =>
        set((state) => ({
          todos: [
            {
              id: crypto.randomUUID(),
              title,
              status: 'backlog',
              createdAt: new Date(),
            },
            ...state.todos,
          ],
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      editTodo: (id, title) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, title } : todo
          ),
        })),
      updateTodoStatus: (id, status) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, status } : todo
          ),
        })),
    }),
    {
      name: 'todo-storage',
    }
  )
);