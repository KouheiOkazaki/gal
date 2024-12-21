'use client';

import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Todo, TodoStatus } from '@/app/types/todo';
import { useTodoStore } from '@/app/store/todo-store';
import { KanbanColumn } from './column';
import { TodoItem } from '../todo-item';

const columns: { status: TodoStatus; title: string }[] = [
  { status: 'backlog', title: '未着手' },
  { status: 'in-progress', title: '進行中' },
  { status: 'done', title: '完了' },
];

export function KanbanBoard() {
  const { todos, updateTodoStatus, deleteTodo, editTodo } = useTodoStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const todoId = active.id as string;
      const newStatus = over.id as TodoStatus;
      updateTodoStatus(todoId, newStatus);
    }
  };

  const getTodosByStatus = (status: TodoStatus) => {
    return todos.filter(todo => todo.status === status);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {columns.map(({ status, title }) => (
          <KanbanColumn key={status} status={status} title={title}>
            {getTodosByStatus(status).map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </KanbanColumn>
        ))}
      </div>
    </DndContext>
  );
}