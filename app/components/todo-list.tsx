'use client';

import { AnimatePresence } from 'framer-motion';
import { TodoItem } from './todo-item';
import { useTodoStore } from '../store/todo-store';

export function TodoList() {
  const { todos, filter, toggleTodo, deleteTodo, editTodo } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </AnimatePresence>
      {filteredTodos.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          タスクがありません
        </p>
      )}
    </div>
  );
}