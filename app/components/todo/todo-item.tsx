'use client';

import { motion } from 'framer-motion';
import { Todo } from '@/app/types/todo';
import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { TodoDragHandle } from './todo-drag-handle';
import { TodoEditForm } from './todo-edit-form';
import { TodoActions } from './todo-actions';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

export function TodoItem({ todo, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: todo.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedTitle.trim()) {
      onEdit(todo.id, editedTitle);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
    >
      <TodoDragHandle listeners={listeners} attributes={attributes} />
      
      {isEditing ? (
        <TodoEditForm
          title={editedTitle}
          onSubmit={handleSubmit}
          onChange={setEditedTitle}
        />
      ) : (
        <span className="flex-1 text-gray-900">
          {todo.title}
        </span>
      )}

      <TodoActions
        onEdit={() => setIsEditing(!isEditing)}
        onDelete={() => onDelete(todo.id)}
      />
    </motion.div>
  );
}