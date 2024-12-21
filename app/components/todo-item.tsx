'use client';

import { motion } from 'framer-motion';
import { Todo } from '../types/todo';
import { Pencil, Trash2, GripVertical } from 'lucide-react';
import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';

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
      <button
        {...listeners}
        {...attributes}
        className="touch-none p-1 hover:bg-gray-100 rounded text-gray-400"
      >
        <GripVertical size={16} />
      </button>
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex-1">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoFocus
            onBlur={handleSubmit}
          />
        </form>
      ) : (
        <span className="flex-1 text-gray-900">
          {todo.title}
        </span>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900"
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 hover:bg-red-100 rounded-lg text-red-500 hover:text-red-600"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </motion.div>
  );
}