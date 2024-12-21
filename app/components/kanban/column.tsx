'use client';

import { useDroppable } from '@dnd-kit/core';
import { TodoStatus } from '@/app/types/todo';
import { cn } from '@/app/lib/utils';

interface KanbanColumnProps {
  status: TodoStatus;
  title: string;
  children: React.ReactNode;
}

export function KanbanColumn({ status, title, children }: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    <div className="flex flex-col flex-1 min-w-[300px]">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div
        ref={setNodeRef}
        className={cn(
          'flex flex-col gap-3 p-4 bg-gray-50 rounded-lg min-h-[500px]',
          isOver && 'ring-2 ring-blue-500 ring-inset'
        )}
      >
        {children}
      </div>
    </div>
  );
}